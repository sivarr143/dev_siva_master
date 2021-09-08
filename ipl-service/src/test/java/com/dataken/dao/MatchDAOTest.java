package com.dataken.dao;

import org.junit.Test;

import java.util.Map;

import static org.junit.Assert.*;

public class MatchDAOTest {

    @Test
    public void queryTopTenRunScorers() {
        MatchDAO dao = new MatchDAO();
        Map<String, Integer> stats = dao.queryTopTenRunScorers("2020");
        System.out.println(stats);
    }

    @Test
    public void queryTopTenWicketTakers() {
        MatchDAO dao = new MatchDAO();
        Map<String, Integer> stats = dao.queryTopTenWicketTakers("2020");
        System.out.println(stats);
    }
}
