import { useEffect, useRef, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { getGallery } from "./services/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import smoothScroll from "./services/smoothScroll";

const data = {
  total: 989,
  total_pages: 83,
  results: [
    {
      id: "smgqIwTvf0M",
      slug: "grey-cat-on-brown-ground-smgqIwTvf0M",
      alternative_slugs: {
        en: "grey-cat-on-brown-ground-smgqIwTvf0M",
        es: "gato-gris-sobre-fondo-marron-smgqIwTvf0M",
        ja: "茶色の地面に灰色の猫-smgqIwTvf0M",
        fr: "chat-gris-sur-fond-brun-smgqIwTvf0M",
        it: "gatto-grigio-su-terreno-marrone-smgqIwTvf0M",
        ko: "갈색-땅에-회색-고양이-smgqIwTvf0M",
        de: "graue-katze-auf-braunem-grund-smgqIwTvf0M",
        pt: "gato-cinzento-no-chao-marrom-smgqIwTvf0M",
      },
      created_at: "2020-01-30T11:31:14Z",
      updated_at: "2024-11-07T18:26:47Z",
      promoted_at: null,
      width: 2848,
      height: 2848,
      color: "#264026",
      blur_hash: "LUG9Qob[9Zxa0KV@agWBNFoMxHWC",
      description: "Cats of Bern",
      alt_description: "grey cat on brown ground",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1580383857470-d5eff2e6b845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1580383857470-d5eff2e6b845",
      },
      links: {
        self: "https://api.unsplash.com/photos/grey-cat-on-brown-ground-smgqIwTvf0M",
        html: "https://unsplash.com/photos/grey-cat-on-brown-ground-smgqIwTvf0M",
        download:
          "https://unsplash.com/photos/smgqIwTvf0M/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/smgqIwTvf0M/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 147,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        wallpapers: {
          status: "rejected",
        },
      },
      asset_type: "photo",
      user: {
        id: "H0rH8fkh8TA",
        updated_at: "2024-11-06T01:16:24Z",
        username: "veea_art",
        name: "Andreea V",
        first_name: "Andreea",
        last_name: "V",
        twitter_username: null,
        portfolio_url: "https://linktr.ee/veea_art",
        bio: null,
        location: "London",
        links: {
          self: "https://api.unsplash.com/users/veea_art",
          html: "https://unsplash.com/@veea_art",
          photos: "https://api.unsplash.com/users/veea_art/photos",
          likes: "https://api.unsplash.com/users/veea_art/likes",
          portfolio: "https://api.unsplash.com/users/veea_art/portfolio",
          following: "https://api.unsplash.com/users/veea_art/following",
          followers: "https://api.unsplash.com/users/veea_art/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1600972407932-4a53c41637b1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1600972407932-4a53c41637b1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1600972407932-4a53c41637b1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "veea_art",
        total_collections: 8,
        total_likes: 787,
        total_photos: 51,
        total_promoted_photos: 0,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "veea_art",
          portfolio_url: "https://linktr.ee/veea_art",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "eoHUaRLrYxw",
      slug: "portrait-of-a-cat-with-green-eyes-eoHUaRLrYxw",
      alternative_slugs: {
        en: "portrait-of-a-cat-with-green-eyes-eoHUaRLrYxw",
        es: "retrato-de-un-gato-con-ojos-verdes-eoHUaRLrYxw",
        ja: "緑の目を持つ猫の肖像画-eoHUaRLrYxw",
        fr: "portrait-dun-chat-aux-yeux-verts-eoHUaRLrYxw",
        it: "ritratto-di-un-gatto-con-gli-occhi-verdi-eoHUaRLrYxw",
        ko: "녹색-눈을-가진-고양이의-초상화-eoHUaRLrYxw",
        de: "portrat-einer-katze-mit-grunen-augen-eoHUaRLrYxw",
        pt: "retrato-de-um-gato-com-olhos-verdes-eoHUaRLrYxw",
      },
      created_at: "2019-12-02T22:59:56Z",
      updated_at: "2024-11-05T20:17:00Z",
      promoted_at: null,
      width: 3661,
      height: 3661,
      color: "#404040",
      blur_hash: "LA9%n$4o4o%LD%t7%MM{0Lxt?GWD",
      description: null,
      alt_description: "portrait of a cat with green eyes",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1575327513944-071d262e2849?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwyfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1575327513944-071d262e2849?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwyfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1575327513944-071d262e2849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwyfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1575327513944-071d262e2849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwyfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1575327513944-071d262e2849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwyfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1575327513944-071d262e2849",
      },
      links: {
        self: "https://api.unsplash.com/photos/portrait-of-a-cat-with-green-eyes-eoHUaRLrYxw",
        html: "https://unsplash.com/photos/portrait-of-a-cat-with-green-eyes-eoHUaRLrYxw",
        download:
          "https://unsplash.com/photos/eoHUaRLrYxw/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwyfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/eoHUaRLrYxw/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwyfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 149,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: "rejected",
        },
      },
      asset_type: "photo",
      user: {
        id: "A8ZovL8LI3Q",
        updated_at: "2024-11-06T01:16:53Z",
        username: "rafael_ishkhanyan",
        name: "Rafael Ishkhanyan",
        first_name: "Rafael",
        last_name: "Ishkhanyan",
        twitter_username: null,
        portfolio_url: null,
        bio: "Lawyer, photographer & musician in Harakash band.",
        location: "Yerevan, Armenia",
        links: {
          self: "https://api.unsplash.com/users/rafael_ishkhanyan",
          html: "https://unsplash.com/@rafael_ishkhanyan",
          photos: "https://api.unsplash.com/users/rafael_ishkhanyan/photos",
          likes: "https://api.unsplash.com/users/rafael_ishkhanyan/likes",
          portfolio:
            "https://api.unsplash.com/users/rafael_ishkhanyan/portfolio",
          following:
            "https://api.unsplash.com/users/rafael_ishkhanyan/following",
          followers:
            "https://api.unsplash.com/users/rafael_ishkhanyan/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1637259345755-71d6a3e86b65image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1637259345755-71d6a3e86b65image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1637259345755-71d6a3e86b65image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: null,
        total_collections: 0,
        total_likes: 181,
        total_photos: 97,
        total_promoted_photos: 9,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "XwUtcjQpaiA",
      slug: "closeup-photo-of-tabby-cat-XwUtcjQpaiA",
      alternative_slugs: {
        en: "closeup-photo-of-tabby-cat-XwUtcjQpaiA",
        es: "foto-de-primer-plano-de-gato-atigrado-XwUtcjQpaiA",
        ja: "ぶち猫のクローズアップ写真-XwUtcjQpaiA",
        fr: "photo-en-gros-plan-de-chat-tigre-XwUtcjQpaiA",
        it: "foto-ravvicinata-di-gatto-soriano-XwUtcjQpaiA",
        ko: "줄무늬-고양이의-근접-촬영-사진-XwUtcjQpaiA",
        de: "nahaufnahme-einer-getigerten-katze-XwUtcjQpaiA",
        pt: "foto-de-closeup-do-gato-tabby-XwUtcjQpaiA",
      },
      created_at: "2017-11-02T02:21:01Z",
      updated_at: "2024-09-29T00:20:13Z",
      promoted_at: null,
      width: 2023,
      height: 2046,
      color: "#a68c73",
      blur_hash: "LCH-}a~q8{WAJ:IBi^tQ_2S4NGM_",
      description: null,
      alt_description: "closeup photo of tabby cat",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1509589130981-f70226276f6a?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwzfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1509589130981-f70226276f6a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwzfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1509589130981-f70226276f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwzfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1509589130981-f70226276f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwzfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1509589130981-f70226276f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwzfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1509589130981-f70226276f6a",
      },
      links: {
        self: "https://api.unsplash.com/photos/closeup-photo-of-tabby-cat-XwUtcjQpaiA",
        html: "https://unsplash.com/photos/closeup-photo-of-tabby-cat-XwUtcjQpaiA",
        download:
          "https://unsplash.com/photos/XwUtcjQpaiA/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwzfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/XwUtcjQpaiA/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwzfHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 124,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "y7-BEXdTJRE",
        updated_at: "2024-10-30T21:51:28Z",
        username: "sepatsj",
        name: "Jim Stapleton",
        first_name: "Jim",
        last_name: "Stapleton",
        twitter_username: null,
        portfolio_url: null,
        bio: null,
        location: null,
        links: {
          self: "https://api.unsplash.com/users/sepatsj",
          html: "https://unsplash.com/@sepatsj",
          photos: "https://api.unsplash.com/users/sepatsj/photos",
          likes: "https://api.unsplash.com/users/sepatsj/likes",
          portfolio: "https://api.unsplash.com/users/sepatsj/portfolio",
          following: "https://api.unsplash.com/users/sepatsj/following",
          followers: "https://api.unsplash.com/users/sepatsj/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1496256173625-1cd6cd81ae1a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1496256173625-1cd6cd81ae1a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1496256173625-1cd6cd81ae1a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: null,
        total_collections: 18,
        total_likes: 1655,
        total_photos: 34,
        total_promoted_photos: 2,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "r4dzrZjv4tc",
      slug: "black-and-white-long-fur-cat-r4dzrZjv4tc",
      alternative_slugs: {
        en: "black-and-white-long-fur-cat-r4dzrZjv4tc",
        es: "gato-de-pelaje-largo-blanco-y-negro-r4dzrZjv4tc",
        ja: "黒と白の長い毛皮の猫-r4dzrZjv4tc",
        fr: "chat-a-longue-fourrure-noir-et-blanc-r4dzrZjv4tc",
        it: "gatto-a-pelo-lungo-in-bianco-e-nero-r4dzrZjv4tc",
        ko: "흑인과-백인-긴-모피-고양이-r4dzrZjv4tc",
        de: "schwarz-weisse-langfellkatze-r4dzrZjv4tc",
        pt: "gato-de-pelo-longo-preto-e-branco-r4dzrZjv4tc",
      },
      created_at: "2020-06-01T13:15:55Z",
      updated_at: "2024-10-14T23:13:37Z",
      promoted_at: null,
      width: 3712,
      height: 3712,
      color: "#405959",
      blur_hash: "LaF=]vIoNG%M01n$t7RjbHxuWCM{",
      description: "Sylvestre",
      alt_description: "black and white long fur cat",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1591017320663-dc3334ff1dcc?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw0fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1591017320663-dc3334ff1dcc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw0fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1591017320663-dc3334ff1dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw0fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1591017320663-dc3334ff1dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw0fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1591017320663-dc3334ff1dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw0fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1591017320663-dc3334ff1dcc",
      },
      links: {
        self: "https://api.unsplash.com/photos/black-and-white-long-fur-cat-r4dzrZjv4tc",
        html: "https://unsplash.com/photos/black-and-white-long-fur-cat-r4dzrZjv4tc",
        download:
          "https://unsplash.com/photos/r4dzrZjv4tc/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw0fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/r4dzrZjv4tc/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw0fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 43,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "0MDNPfTyVF0",
        updated_at: "2024-10-14T13:48:27Z",
        username: "luckybel",
        name: "Jean Luc Catarin",
        first_name: "Jean Luc",
        last_name: "Catarin",
        twitter_username: null,
        portfolio_url: "https://jeanluccatarin.wixsite.com/photographer",
        bio: null,
        location: "Marchin (Belgium)",
        links: {
          self: "https://api.unsplash.com/users/luckybel",
          html: "https://unsplash.com/@luckybel",
          photos: "https://api.unsplash.com/users/luckybel/photos",
          likes: "https://api.unsplash.com/users/luckybel/likes",
          portfolio: "https://api.unsplash.com/users/luckybel/portfolio",
          following: "https://api.unsplash.com/users/luckybel/following",
          followers: "https://api.unsplash.com/users/luckybel/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1590527739074-24da15e1850dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1590527739074-24da15e1850dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1590527739074-24da15e1850dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "jeanluc.catarin",
        total_collections: 0,
        total_likes: 4,
        total_photos: 29,
        total_promoted_photos: 0,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "jeanluc.catarin",
          portfolio_url: "https://jeanluccatarin.wixsite.com/photographer",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "9MXrPaCvDps",
      slug: "short-furred-gray-kitten-9MXrPaCvDps",
      alternative_slugs: {
        en: "short-furred-gray-kitten-9MXrPaCvDps",
        es: "gatito-gris-de-pelaje-corto-9MXrPaCvDps",
        ja: "毛皮の短い灰色の子猫-9MXrPaCvDps",
        fr: "chaton-gris-a-poil-court-9MXrPaCvDps",
        it: "gattino-grigio-dal-pelo-corto-9MXrPaCvDps",
        ko: "짧은-털-회색-고양이-9MXrPaCvDps",
        de: "kurzhaariges-graues-katzchen-9MXrPaCvDps",
        pt: "gatinho-cinza-de-pelo-curto-9MXrPaCvDps",
      },
      created_at: "2019-10-07T15:12:04Z",
      updated_at: "2024-08-16T10:30:10Z",
      promoted_at: null,
      width: 3024,
      height: 3224,
      color: "#d9d9d9",
      blur_hash: "LFMaw^og?vRiIARjofj[_NayDixu",
      description: "Kitty cat",
      alt_description: "short-furred gray kitten",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1570461121477-846eadb013b6?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw1fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1570461121477-846eadb013b6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw1fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1570461121477-846eadb013b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw1fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1570461121477-846eadb013b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw1fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1570461121477-846eadb013b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw1fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1570461121477-846eadb013b6",
      },
      links: {
        self: "https://api.unsplash.com/photos/short-furred-gray-kitten-9MXrPaCvDps",
        html: "https://unsplash.com/photos/short-furred-gray-kitten-9MXrPaCvDps",
        download:
          "https://unsplash.com/photos/9MXrPaCvDps/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw1fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/9MXrPaCvDps/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw1fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 139,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "ipdxd6ctgZA",
        updated_at: "2024-10-10T21:36:43Z",
        username: "minusculemarie",
        name: "Marie-Michèle Bouchard",
        first_name: "Marie-Michèle",
        last_name: "Bouchard",
        twitter_username: null,
        portfolio_url: null,
        bio: "Instagram : @minusculemarie & @panique_pas_",
        location: "Montréal",
        links: {
          self: "https://api.unsplash.com/users/minusculemarie",
          html: "https://unsplash.com/@minusculemarie",
          photos: "https://api.unsplash.com/users/minusculemarie/photos",
          likes: "https://api.unsplash.com/users/minusculemarie/likes",
          portfolio: "https://api.unsplash.com/users/minusculemarie/portfolio",
          following: "https://api.unsplash.com/users/minusculemarie/following",
          followers: "https://api.unsplash.com/users/minusculemarie/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1588858960635-7eda81c366c5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1588858960635-7eda81c366c5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1588858960635-7eda81c366c5image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "minusculemarie",
        total_collections: 7,
        total_likes: 81,
        total_photos: 194,
        total_promoted_photos: 48,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "minusculemarie",
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "UoNO74xD-JA",
      slug: "tuxedo-cat-beside-bear-plush-toy-UoNO74xD-JA",
      alternative_slugs: {
        en: "tuxedo-cat-beside-bear-plush-toy-UoNO74xD-JA",
        es: "gato-de-esmoquin-al-lado-de-juguete-de-peluche-de-oso-UoNO74xD-JA",
        ja: "クマのぬいぐるみの横のタキシード猫-UoNO74xD-JA",
        fr: "chat-de-smoking-a-cote-de-lours-en-peluche-UoNO74xD-JA",
        it: "gatto-smoking-accanto-orso-peluche-UoNO74xD-JA",
        ko: "턱시도-고양이-옆-곰-봉제-장난감-UoNO74xD-JA",
        de: "smoking-katze-neben-bar-pluschtier-UoNO74xD-JA",
        pt: "gato-de-smoking-ao-lado-do-brinquedo-de-pelucia-do-urso-UoNO74xD-JA",
      },
      created_at: "2019-01-27T13:22:00Z",
      updated_at: "2024-11-04T06:41:06Z",
      promoted_at: null,
      width: 2847,
      height: 2848,
      color: "#c0d9d9",
      blur_hash: "LQL#LQOt%$R5B=RPM{%M.TnNMwkD",
      description: null,
      alt_description: "tuxedo cat beside bear plush toy",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1548595152-f556f2d0fde5?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw2fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1548595152-f556f2d0fde5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw2fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1548595152-f556f2d0fde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw2fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1548595152-f556f2d0fde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw2fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1548595152-f556f2d0fde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw2fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1548595152-f556f2d0fde5",
      },
      links: {
        self: "https://api.unsplash.com/photos/tuxedo-cat-beside-bear-plush-toy-UoNO74xD-JA",
        html: "https://unsplash.com/photos/tuxedo-cat-beside-bear-plush-toy-UoNO74xD-JA",
        download:
          "https://unsplash.com/photos/UoNO74xD-JA/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw2fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/UoNO74xD-JA/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw2fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 189,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "QUPO2FMUZKE",
        updated_at: "2024-10-31T10:38:10Z",
        username: "philippineft",
        name: "Philippine FITAMANT",
        first_name: "Philippine",
        last_name: "FITAMANT",
        twitter_username: null,
        portfolio_url: null,
        bio: null,
        location: null,
        links: {
          self: "https://api.unsplash.com/users/philippineft",
          html: "https://unsplash.com/@philippineft",
          photos: "https://api.unsplash.com/users/philippineft/photos",
          likes: "https://api.unsplash.com/users/philippineft/likes",
          portfolio: "https://api.unsplash.com/users/philippineft/portfolio",
          following: "https://api.unsplash.com/users/philippineft/following",
          followers: "https://api.unsplash.com/users/philippineft/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: null,
        total_collections: 1,
        total_likes: 15,
        total_photos: 8,
        total_promoted_photos: 1,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: null,
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "zEm3OoFQv48",
      slug: "a-black-cat-sitting-on-the-ground-looking-up-zEm3OoFQv48",
      alternative_slugs: {
        en: "a-black-cat-sitting-on-the-ground-looking-up-zEm3OoFQv48",
        es: "un-gato-negro-sentado-en-el-suelo-mirando-hacia-arriba-zEm3OoFQv48",
        ja: "地面に座って見上げる黒猫-zEm3OoFQv48",
        fr: "un-chat-noir-assis-sur-le-sol-regardant-vers-le-haut-zEm3OoFQv48",
        it: "un-gatto-nero-seduto-a-terra-che-guarda-in-alto-zEm3OoFQv48",
        ko: "검은-고양이가-땅바닥에-앉아-위를-올려다보고-있다-zEm3OoFQv48",
        de: "eine-schwarze-katze-die-auf-dem-boden-sitzt-und-nach-oben-schaut-zEm3OoFQv48",
        pt: "um-gato-preto-sentado-no-chao-olhando-para-cima-zEm3OoFQv48",
      },
      created_at: "2024-04-19T22:51:22Z",
      updated_at: "2024-11-07T02:02:19Z",
      promoted_at: null,
      width: 3567,
      height: 3567,
      color: "#d9c08c",
      blur_hash: "LZJt%_xs~nD+%KRjIps.%KRkM|t6",
      description: "snoepie",
      alt_description: "a black cat sitting on the ground looking up",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1713566758274-910c2a0f322d?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw3fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1713566758274-910c2a0f322d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw3fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1713566758274-910c2a0f322d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw3fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1713566758274-910c2a0f322d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw3fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1713566758274-910c2a0f322d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw3fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1713566758274-910c2a0f322d",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-black-cat-sitting-on-the-ground-looking-up-zEm3OoFQv48",
        html: "https://unsplash.com/photos/a-black-cat-sitting-on-the-ground-looking-up-zEm3OoFQv48",
        download:
          "https://unsplash.com/photos/zEm3OoFQv48/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw3fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/zEm3OoFQv48/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw3fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 6,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        animals: {
          status: "rejected",
        },
      },
      asset_type: "photo",
      user: {
        id: "BxvmGR42R28",
        updated_at: "2024-11-07T14:38:40Z",
        username: "kyantijhuis",
        name: "Kyan Tijhuis",
        first_name: "Kyan",
        last_name: "Tijhuis",
        twitter_username: null,
        portfolio_url: null,
        bio: null,
        location: "The Netherlands",
        links: {
          self: "https://api.unsplash.com/users/kyantijhuis",
          html: "https://unsplash.com/@kyantijhuis",
          photos: "https://api.unsplash.com/users/kyantijhuis/photos",
          likes: "https://api.unsplash.com/users/kyantijhuis/likes",
          portfolio: "https://api.unsplash.com/users/kyantijhuis/portfolio",
          following: "https://api.unsplash.com/users/kyantijhuis/following",
          followers: "https://api.unsplash.com/users/kyantijhuis/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1724502684277-29b9e51bb665?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1724502684277-29b9e51bb665?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1724502684277-29b9e51bb665?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "kyantijhuis",
        total_collections: 2,
        total_likes: 233,
        total_photos: 91,
        total_promoted_photos: 0,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "kyantijhuis",
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "2R0JNId-rwg",
      slug: "brown-tabby-kitten-looking-up-2R0JNId-rwg",
      alternative_slugs: {
        en: "brown-tabby-kitten-looking-up-2R0JNId-rwg",
        es: "gatito-atigrado-marron-mirando-hacia-arriba-2R0JNId-rwg",
        ja: "見上げる茶色のぶちの子猫-2R0JNId-rwg",
        fr: "chaton-tigre-brun-regardant-vers-le-haut-2R0JNId-rwg",
        it: "gattino-soriano-marrone-che-guarda-in-alto-2R0JNId-rwg",
        ko: "위를-올려다보는-갈색-줄무늬-새끼-고양이-2R0JNId-rwg",
        de: "braun-getigertes-katzchen-schaut-auf-2R0JNId-rwg",
        pt: "gatinho-marrom-tabby-olhando-para-cima-2R0JNId-rwg",
      },
      created_at: "2019-10-11T20:03:26Z",
      updated_at: "2024-11-07T12:22:53Z",
      promoted_at: null,
      width: 3317,
      height: 3664,
      color: "#f3f3f3",
      blur_hash: "LSRV^N%M?wMx-=RPM_tR%Mj[ITj[",
      description: null,
      alt_description: "brown tabby kitten looking up",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1570824103090-72cf4906868c?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw4fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1570824103090-72cf4906868c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw4fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1570824103090-72cf4906868c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw4fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1570824103090-72cf4906868c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw4fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1570824103090-72cf4906868c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw4fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1570824103090-72cf4906868c",
      },
      links: {
        self: "https://api.unsplash.com/photos/brown-tabby-kitten-looking-up-2R0JNId-rwg",
        html: "https://unsplash.com/photos/brown-tabby-kitten-looking-up-2R0JNId-rwg",
        download:
          "https://unsplash.com/photos/2R0JNId-rwg/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw4fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/2R0JNId-rwg/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw4fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 123,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "CelAJ86kjus",
        updated_at: "2024-08-28T01:23:35Z",
        username: "theluckyneko",
        name: "The Lucky Neko",
        first_name: "The Lucky Neko",
        last_name: null,
        twitter_username: null,
        portfolio_url: "http://www.theluckyneko.com",
        bio: "Rescue Photography ❤️\r\nBy Millie Wollney  |   To adopt in the NJ/NYC area, please visit www.FOWArescue.org",
        location: null,
        links: {
          self: "https://api.unsplash.com/users/theluckyneko",
          html: "https://unsplash.com/@theluckyneko",
          photos: "https://api.unsplash.com/users/theluckyneko/photos",
          likes: "https://api.unsplash.com/users/theluckyneko/likes",
          portfolio: "https://api.unsplash.com/users/theluckyneko/portfolio",
          following: "https://api.unsplash.com/users/theluckyneko/following",
          followers: "https://api.unsplash.com/users/theluckyneko/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1564758416383-64390de5db23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1564758416383-64390de5db23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1564758416383-64390de5db23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "theluckyneko",
        total_collections: 0,
        total_likes: 3,
        total_photos: 258,
        total_promoted_photos: 5,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "theluckyneko",
          portfolio_url: "http://www.theluckyneko.com",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "MEQFUHzCtAo",
      slug: "assorted-color-kittens-MEQFUHzCtAo",
      alternative_slugs: {
        en: "assorted-color-kittens-MEQFUHzCtAo",
        es: "gatitos-de-colores-variados-MEQFUHzCtAo",
        ja: "色とりどりの子猫-MEQFUHzCtAo",
        fr: "chatons-de-couleurs-assorties-MEQFUHzCtAo",
        it: "gattini-di-colori-assortiti-MEQFUHzCtAo",
        ko: "다양한-색상의-새끼-고양이-MEQFUHzCtAo",
        de: "katzchen-in-verschiedenen-farben-MEQFUHzCtAo",
        pt: "gatinhos-de-cores-variadas-MEQFUHzCtAo",
      },
      created_at: "2019-10-11T20:03:27Z",
      updated_at: "2024-10-30T12:14:10Z",
      promoted_at: null,
      width: 5184,
      height: 4828,
      color: "#f3f3f3",
      blur_hash: "LHR:E9%g?cIU_NRjITxu?cRPM{xu",
      description: null,
      alt_description: "assorted-color kittens",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1570824104629-1817c91f7d1d?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw5fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1570824104629-1817c91f7d1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw5fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1570824104629-1817c91f7d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw5fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1570824104629-1817c91f7d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw5fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1570824104629-1817c91f7d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw5fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1570824104629-1817c91f7d1d",
      },
      links: {
        self: "https://api.unsplash.com/photos/assorted-color-kittens-MEQFUHzCtAo",
        html: "https://unsplash.com/photos/assorted-color-kittens-MEQFUHzCtAo",
        download:
          "https://unsplash.com/photos/MEQFUHzCtAo/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw5fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
        download_location:
          "https://api.unsplash.com/photos/MEQFUHzCtAo/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHw5fHxjYXRzfGVufDB8Mnx8fDE3MzEwMDQzNDd8MA",
      },
      likes: 286,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "CelAJ86kjus",
        updated_at: "2024-08-28T01:23:35Z",
        username: "theluckyneko",
        name: "The Lucky Neko",
        first_name: "The Lucky Neko",
        last_name: null,
        twitter_username: null,
        portfolio_url: "http://www.theluckyneko.com",
        bio: "Rescue Photography ❤️\r\nBy Millie Wollney  |   To adopt in the NJ/NYC area, please visit www.FOWArescue.org",
        location: null,
        links: {
          self: "https://api.unsplash.com/users/theluckyneko",
          html: "https://unsplash.com/@theluckyneko",
          photos: "https://api.unsplash.com/users/theluckyneko/photos",
          likes: "https://api.unsplash.com/users/theluckyneko/likes",
          portfolio: "https://api.unsplash.com/users/theluckyneko/portfolio",
          following: "https://api.unsplash.com/users/theluckyneko/following",
          followers: "https://api.unsplash.com/users/theluckyneko/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1564758416383-64390de5db23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1564758416383-64390de5db23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1564758416383-64390de5db23?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "theluckyneko",
        total_collections: 0,
        total_likes: 3,
        total_photos: 258,
        total_promoted_photos: 5,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "theluckyneko",
          portfolio_url: "http://www.theluckyneko.com",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "q_repJO7xPA",
      slug: "brown-tabby-cat-on-brown-wooden-table-q_repJO7xPA",
      alternative_slugs: {
        en: "brown-tabby-cat-on-brown-wooden-table-q_repJO7xPA",
        es: "gato-atigrado-marron-sobre-mesa-de-madera-marron-q_repJO7xPA",
        ja: "茶色の木製テーブルの上の茶色のぶち猫-q_repJO7xPA",
        fr: "chat-tigre-brun-sur-table-en-bois-marron-q_repJO7xPA",
        it: "gatto-soriano-marrone-su-tavolo-di-legno-marrone-q_repJO7xPA",
        ko: "갈색-나무-테이블에-갈색-얼룩-고양이-q_repJO7xPA",
        de: "braune-tabby-katze-auf-braunem-holztisch-q_repJO7xPA",
        pt: "gato-tabby-marrom-na-mesa-de-madeira-marrom-q_repJO7xPA",
      },
      created_at: "2020-08-26T17:33:22Z",
      updated_at: "2024-11-07T12:37:53Z",
      promoted_at: null,
      width: 3125,
      height: 3454,
      color: "#594026",
      blur_hash: "LbHL6yX8xZ%N4TogogRkxERjWAM{",
      description: null,
      alt_description: "brown tabby cat on brown wooden table",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1598463166228-c0f90d180918?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMHx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1598463166228-c0f90d180918?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMHx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1598463166228-c0f90d180918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMHx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1598463166228-c0f90d180918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMHx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1598463166228-c0f90d180918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMHx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1598463166228-c0f90d180918",
      },
      links: {
        self: "https://api.unsplash.com/photos/brown-tabby-cat-on-brown-wooden-table-q_repJO7xPA",
        html: "https://unsplash.com/photos/brown-tabby-cat-on-brown-wooden-table-q_repJO7xPA",
        download:
          "https://unsplash.com/photos/q_repJO7xPA/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMHx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA",
        download_location:
          "https://api.unsplash.com/photos/q_repJO7xPA/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMHx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA",
      },
      likes: 53,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "Z-uWqB5QMr8",
        updated_at: "2024-10-11T04:55:23Z",
        username: "boodster",
        name: "Bodi.raw",
        first_name: "Bodi.raw",
        last_name: null,
        twitter_username: null,
        portfolio_url: "http://btibosch.wixsite.com/bodi",
        bio: "Instagram @bodi.raw Website https://btibosch.wixsite.com/bodi",
        location: "Den Bosch",
        links: {
          self: "https://api.unsplash.com/users/boodster",
          html: "https://unsplash.com/@boodster",
          photos: "https://api.unsplash.com/users/boodster/photos",
          likes: "https://api.unsplash.com/users/boodster/likes",
          portfolio: "https://api.unsplash.com/users/boodster/portfolio",
          following: "https://api.unsplash.com/users/boodster/following",
          followers: "https://api.unsplash.com/users/boodster/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1612259057065-9a4b3254a378image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1612259057065-9a4b3254a378image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1612259057065-9a4b3254a378image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "bodi.raw",
        total_collections: 6,
        total_likes: 1,
        total_photos: 79,
        total_promoted_photos: 0,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "bodi.raw",
          portfolio_url: "http://btibosch.wixsite.com/bodi",
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "9umJEttW3nA",
      slug: "brown-tabby-cat-on-green-grass-during-daytime-9umJEttW3nA",
      alternative_slugs: {
        en: "brown-tabby-cat-on-green-grass-during-daytime-9umJEttW3nA",
        es: "gato-atigrado-marron-en-hierba-verde-durante-el-dia-9umJEttW3nA",
        ja: "日中の緑の芝生の上の茶色のぶち猫-9umJEttW3nA",
        fr: "chat-tigre-brun-sur-lherbe-verte-pendant-la-journee-9umJEttW3nA",
        it: "gatto-soriano-marrone-su-erba-verde-durante-il-giorno-9umJEttW3nA",
        ko: "낮-동안-푸른-잔디에-갈색-얼룩-고양이-9umJEttW3nA",
        de: "braune-tabby-katze-tagsuber-auf-grunem-gras-9umJEttW3nA",
        pt: "gato-tabby-marrom-na-grama-verde-durante-o-dia-9umJEttW3nA",
      },
      created_at: "2020-01-26T14:14:20Z",
      updated_at: "2024-07-26T12:32:34Z",
      promoted_at: null,
      width: 2792,
      height: 2848,
      color: "#73a626",
      blur_hash: "LUDnA^IpWCn,8:xVWYso$|R*jKk8",
      description: "Cat Pose",
      alt_description: "brown tabby cat on green grass during daytime",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1580047136651-034e8eca0c46?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMXx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1580047136651-034e8eca0c46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMXx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1580047136651-034e8eca0c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMXx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1580047136651-034e8eca0c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMXx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1580047136651-034e8eca0c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMXx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1580047136651-034e8eca0c46",
      },
      links: {
        self: "https://api.unsplash.com/photos/brown-tabby-cat-on-green-grass-during-daytime-9umJEttW3nA",
        html: "https://unsplash.com/photos/brown-tabby-cat-on-green-grass-during-daytime-9umJEttW3nA",
        download:
          "https://unsplash.com/photos/9umJEttW3nA/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMXx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA",
        download_location:
          "https://api.unsplash.com/photos/9umJEttW3nA/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMXx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA",
      },
      likes: 15,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "mleR0JN8UYE",
        updated_at: "2024-10-11T07:06:52Z",
        username: "prakhar_kont",
        name: "i m__Prakhar Kont",
        first_name: "i m__Prakhar",
        last_name: "Kont",
        twitter_username: null,
        portfolio_url: null,
        bio: "I learn from my each and every day clicks. Photography is the best medium to communicate beyond boundaries languages, religions🐾",
        location: "New Delhi",
        links: {
          self: "https://api.unsplash.com/users/prakhar_kont",
          html: "https://unsplash.com/@prakhar_kont",
          photos: "https://api.unsplash.com/users/prakhar_kont/photos",
          likes: "https://api.unsplash.com/users/prakhar_kont/likes",
          portfolio: "https://api.unsplash.com/users/prakhar_kont/portfolio",
          following: "https://api.unsplash.com/users/prakhar_kont/following",
          followers: "https://api.unsplash.com/users/prakhar_kont/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1578913285719-cb4947e1ba50image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1578913285719-cb4947e1ba50image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1578913285719-cb4947e1ba50image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "Prakhar_kont",
        total_collections: 2,
        total_likes: 54,
        total_photos: 35,
        total_promoted_photos: 1,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "Prakhar_kont",
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
    {
      id: "QRsDpGPV7qk",
      slug: "a-group-of-cats-sitting-on-top-of-a-stool-QRsDpGPV7qk",
      alternative_slugs: {
        en: "a-group-of-cats-sitting-on-top-of-a-stool-QRsDpGPV7qk",
        es: "un-grupo-de-gatos-sentados-encima-de-un-taburete-QRsDpGPV7qk",
        ja: "スツールの上に座っている猫の群れ-QRsDpGPV7qk",
        fr: "un-groupe-de-chats-assis-sur-un-tabouret-QRsDpGPV7qk",
        it: "un-gruppo-di-gatti-seduti-sopra-uno-sgabello-QRsDpGPV7qk",
        ko: "의자-위에-앉아있는-고양이-무리-QRsDpGPV7qk",
        de: "eine-gruppe-von-katzen-die-auf-einem-hocker-sitzen-QRsDpGPV7qk",
        pt: "um-grupo-de-gatos-sentados-em-cima-de-um-banquinho-QRsDpGPV7qk",
      },
      created_at: "2024-09-27T06:55:22Z",
      updated_at: "2024-10-29T19:02:50Z",
      promoted_at: null,
      width: 4480,
      height: 4361,
      color: "#40260c",
      blur_hash: "L9B.+85t?H~B5t%2?FNfRjw]9v%1",
      description:
        "We had a nest of kittens. This is one of the last photo of them all together.",
      alt_description: "A group of cats sitting on top of a stool",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1727419522509-2c2b393ee16b?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMnx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1727419522509-2c2b393ee16b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMnx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1727419522509-2c2b393ee16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMnx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1727419522509-2c2b393ee16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMnx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1727419522509-2c2b393ee16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMnx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1727419522509-2c2b393ee16b",
      },
      links: {
        self: "https://api.unsplash.com/photos/a-group-of-cats-sitting-on-top-of-a-stool-QRsDpGPV7qk",
        html: "https://unsplash.com/photos/a-group-of-cats-sitting-on-top-of-a-stool-QRsDpGPV7qk",
        download:
          "https://unsplash.com/photos/QRsDpGPV7qk/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMnx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA",
        download_location:
          "https://api.unsplash.com/photos/QRsDpGPV7qk/download?ixid=M3w2NzMwMDV8MHwxfHNlYXJjaHwxMnx8Y2F0c3xlbnwwfDJ8fHwxNzMxMDA0MzQ3fDA",
      },
      likes: 4,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      asset_type: "photo",
      user: {
        id: "DpLrO9AaU1A",
        updated_at: "2024-11-06T11:01:03Z",
        username: "thomas_de_fretes",
        name: "Thomas de Fretes",
        first_name: "Thomas",
        last_name: "de Fretes",
        twitter_username: null,
        portfolio_url: null,
        bio: "With both digital and analog photography, I aim to capture the unique stories that light, texture, and emotion reveal in every frame.",
        location: "Spijkenisse",
        links: {
          self: "https://api.unsplash.com/users/thomas_de_fretes",
          html: "https://unsplash.com/@thomas_de_fretes",
          photos: "https://api.unsplash.com/users/thomas_de_fretes/photos",
          likes: "https://api.unsplash.com/users/thomas_de_fretes/likes",
          portfolio:
            "https://api.unsplash.com/users/thomas_de_fretes/portfolio",
          following:
            "https://api.unsplash.com/users/thomas_de_fretes/following",
          followers:
            "https://api.unsplash.com/users/thomas_de_fretes/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1727418602690-58c5a065a8e6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1727418602690-58c5a065a8e6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1727418602690-58c5a065a8e6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "digital_photography_by_thomas",
        total_collections: 11,
        total_likes: 26,
        total_photos: 127,
        total_promoted_photos: 0,
        total_illustrations: 0,
        total_promoted_illustrations: 0,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "digital_photography_by_thomas",
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
    },
  ],
};
function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const galleryRef = useRef(null);
  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        const { data, totalPages } = await getGallery(search, page);
        console.log(data);
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (errors) {
        setError(errors.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [search, error, page]);
  return (
    <section>
      <SearchBar onSubmit={(el) => setSearch(el)} />
      <div className="container">
        {error ? (
          <ErrorMessage text={error} />
        ) : (
          !!images.length && <ImageGallery getRef={galleryRef} items={images} />
        )}
        {isLoading && <Loader />}
        {!!images.length && (
          <LoadMoreBtn
            onClick={() => {
              setPage((prevPage) => prevPage + 1);
              setTimeout(() => {
                smoothScroll(galleryRef);
              }, 100);
            }}
          >
            Load more
          </LoadMoreBtn>
        )}
      </div>
    </section>
  );
}

export default App;
