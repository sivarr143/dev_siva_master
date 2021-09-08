package com.dataken.dao;

import com.dataken.model.Match;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

public class MatchDAO extends MainDAO {

    private static final Logger log = LoggerFactory.getLogger(MatchDAO.class);

    public void persist(Match match) {
        Session session = null;
        Transaction tx = null;
        try {
            session = sessionFactory.openSession();
            tx = session.beginTransaction();
            session.saveOrUpdate(match);
            log.info("Saved the match instance");
            System.out.println("Saved the match ...");
            tx.commit();
        } catch (Exception ex) {
            if ( tx != null ) {
                tx.rollback();
            }
            log.error("Failed saving the match instance", ex);
        } finally {
            if ( session != null ) {
                session.close();
            }
        }
    }

    public void persist(List<Match> list) {
        long start = System.currentTimeMillis();
        Session session = null;
        Transaction tx = null;
        try {
            session = sessionFactory.openSession();
            tx = session.beginTransaction();
            for(Match match : list) {
                session.saveOrUpdate(match);
            }
            log.info("Saved the {} matches in {} ms", list.size(), (System.currentTimeMillis() - start));
            tx.commit();
        } catch (Exception ex) {
            if ( tx != null ) {
                tx.rollback();
            }
            log.error("Failed saving the match instance", ex);
        } finally {
            if ( session != null ) {
                session.close();
            }
        }
    }

    public List<Match> queryMatches() {
        Session session = null;
        Transaction tx = null;
        try {
            session = sessionFactory.openSession();
            tx = session.beginTransaction();
            List<Match> matches = session.createQuery("FROM Match m").list();
            tx.commit();
            return matches;
        } catch (Exception ex) {
            if ( tx != null ) {
                tx.rollback();
            }
        } finally {
            if ( session != null ) {
                session.close();
            }
        }
        return new ArrayList<>();
    }

    public Match queryById(int id) {
        Session session = null;
        Transaction tx = null;
        try {
            session = sessionFactory.openSession();
            tx = session.beginTransaction();
            Match match = (Match) session.createQuery("FROM Match m where id = :id").setParameter("id", id).getSingleResult();
            tx.commit();
            return match;
        } catch (Exception ex) {
            if ( tx != null ) {
                tx.rollback();
            }
            log.error("Failed querying the match by id: " + id, ex);
        } finally {
            if ( session != null ) {
                session.close();
            }
        }
        return null;
    }

    /**
     * Returns the top ten run scorers for a given season
     * @param season
     * @return
     */
    public Map<String, Integer> queryTopTenRunScorers(String season) {
        Map<String, Integer> topTenMap = new LinkedHashMap<>();
        Session session = null;
        Transaction tx = null;
        try {
            session = sessionFactory.openSession();
            tx = session.beginTransaction();
            String hql = "select year(d.match.matchDate), d.batsman, sum(d.batsmanRuns) as totalRuns from " +
                    "Delivery d where year(d.match.matchDate) = :season " +
                    "group by year(d.match.matchDate), d.batsman order by totalRuns desc";
            List stats = session.createQuery(hql).setParameter("season", Integer.parseInt(season)).setMaxResults(10).list();
            stats.forEach(stat -> {
                Object[] row = (Object[]) stat;
                topTenMap.put(row[1].toString(), Integer.parseInt(row[2].toString()));
            });
            tx.commit();
        } catch (Exception ex) {
            if ( tx != null ) {
                tx.rollback();
            }
            log.error("Failed querying the top ten run scorers for season" + season, ex);
        } finally {
            if ( session != null ) {
                session.close();
            }
        }
        return topTenMap;
    }

    /**
     * Returns the top ten wicket takers for a given season
     * @param season
     * @return
     */
    public Map<String, Integer> queryTopTenWicketTakers(String season) {
        Map<String, Integer> topTenMap = new LinkedHashMap<>();
        Session session = null;
        Transaction tx = null;
        try {
            session = sessionFactory.openSession();
            tx = session.beginTransaction();
            String hql = "select year(d.match.matchDate), d.bowler, count(d.bowler) as totalWickets from " +
                    "Delivery d where year(d.match.matchDate) = :season and d.wicket = :wicket and d.dismissalKind not in :dismissals " +
                    "group by year(d.match.matchDate), d.bowler order by totalWickets desc";
            List stats = session.createQuery(hql)
                    .setParameter("season", Integer.parseInt(season))
                    .setParameter("wicket", true)
                    .setParameterList("dismissals", Arrays.asList("obstructing the field","retried hurt","run out"))
                    .setMaxResults(10)
                    .list();
            stats.forEach(stat -> {
                Object[] row = (Object[]) stat;
                topTenMap.put(row[1].toString(), Integer.parseInt(row[2].toString()));
            });
            tx.commit();
        } catch (Exception ex) {
            if ( tx != null ) {
                tx.rollback();
            }
            log.error("Failed querying the top ten run scorers for season" + season, ex);
        } finally {
            if ( session != null ) {
                session.close();
            }
        }
        return topTenMap;
    }

    public List<Match> queryMatches(String season) {
        Session session = null;
        Transaction tx = null;
        try {
            session = sessionFactory.openSession();
            tx = session.beginTransaction();
            List<Match> matches = session.createQuery("FROM Match m where year(m.matchDate) = :season order by m.matchDate")
                    .setParameter("season", Integer.parseInt(season))
                    .list();
            tx.commit();
            return matches;
        } catch (Exception ex) {
            if ( tx != null ) {
                tx.rollback();
            }
        } finally {
            if ( session != null ) {
                session.close();
            }
        }
        return new ArrayList<>();
    }
}
