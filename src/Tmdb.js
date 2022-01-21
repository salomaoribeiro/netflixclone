import React, { Component } from 'react';

/*

** Vamos pegar
-- Originais da Netflix
-- Recomendados (trending)\
-- Em alta (top rated)
-- Ação
-- Comédia
-- Terror
-- Romance
-- Documentários 
*/


const API_KEY = "api_key=32c7c1be7aa00b2bc275f61fb0aba6a3";
const API_LANG = "language=pt-BR";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    // console.log(`${API_BASE}${endpoint}${API_LANG}&${API_KEY}`);

    const req = await fetch(`${API_BASE}${endpoint}${API_LANG}&${API_KEY}`);
    const json = await req.json();
    return json;
}

export default {

    getHomeList: async () => {
        return [
            {
                slug : "originals",
                title : "Originais da Netflix",
                items: await basicFetch(`/discover/tv?with_network=213&`)
            },
            {
                slug : "trending",
                title : "Recomendados para Você",
                items: await basicFetch("/trending/all/week?")
            },
            {
                slug : "top rated",
                title : "Em alta",
                items: await basicFetch("/movie/top_rated?")
            },
            {
                slug : "action",
                title : "Ação",
                items: await basicFetch("/discover/movie?with_genres=28&")
            },
            {
                slug : "comedy",
                title : "Comédia",
                items: await basicFetch("/discover/movie?with_genres=35&")
            },
            {
                slug : "horror",
                title : "Terror",
                items: await basicFetch("/discover/movie?with_genres=27&")
            },
            {
                slug : "romance",
                title : "Romance",
                items: await basicFetch("/discover/movie?with_genres=10749&")
            },
            {
                slug : "documentary",
                title : "Documentários",
                items: await basicFetch("/discover/movie?with_genres=99&")
            }
        ]
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if (movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?`);
                break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    } 
}
