package com.dataken.service;

import com.dataken.dao.MatchDAO;
import com.dataken.model.Match;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Path("/matches")
public class MatchService {

    private static Gson gson = new GsonBuilder().create();
    private MatchDAO matchDao = new MatchDAO();

    @Path("/matchList/{season}")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public List<Match> queryMatches(@PathParam("season") String season) {
        return matchDao.queryMatches(season);
    }

    @Path("/topScorers/{season}")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public Map<String, Integer> topScorers(@PathParam("season") String season) {
        return matchDao.queryTopTenRunScorers(season);
    }

    @Path("/topBowlers/{season}")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public Map<String, Integer> topBowlers(@PathParam("season") String season) {
        return matchDao.queryTopTenWicketTakers(season);
    }

}
