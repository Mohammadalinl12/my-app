import React from "react";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="text-xl font-bold px-2">
        <span className="text-[#9147ff]">Categories</span> we think you'll like
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2">
        <CategoriesItem
          img={"https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg"}
          title="Dota 2"
          viewers="65K"
          tag1="MOBA"
          tag2="ACTION"
        />
         <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg'
          title='Call OF Duty: Warzone'
          viewers='38k'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/509658-188x250.jpg'
          title='Just Chatting'
          viewers='233k Viewers'
          tag1='IRL'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg'
          title='Fortnite'
          viewers='53k Viewers'
          tag1='Shooter'
          tag2='Action'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg'
          title='Minecraft'
          viewers='22k Viewers'
          tag1='Strategy'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg'
          title='Grand Thefy Auto V'
          viewers='95k Viewers'
          tag1='Adventure'
        />

        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/511224-188x250.jpg'
          title='Apex Legends'
          viewers='112k Viewers'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg'
          title='Valorant'
          viewers='151k Viewers'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/1614555304-188x250.jpg'
          title='Call of Duty: Mod..'
          viewers='7.5k Viewers'
          tag1='FPS'
          tag2='Shooter'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/491487-285x380.jpg'
          title='Dead by Daylight'
          viewers='33k Viewers'
          tag1='Action'
          tag2='Horror'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg'
          title='League of Legends'
          viewers='31k Viewers'
          tag1='Action'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/1119642287_IGDB-285x380.jpg'
          title='Yu-GI-OH Master Duel'
          viewers='4k Viewers'
          tag1='Card & Board Game'
          tag2='Strategy'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/494508_IGDB-285x380.jpg'
          title='Yu-GI-OH Duel Links'
          viewers='1k Viewers'
          tag1='Card & Board Game'
          tag2='Strategy'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/497248-285x380.jpg'
          title='Yu-GI-OH Trading Card Game'
          viewers='3k Viewers'
          tag1='Card & Board Game'
          tag2='Strategy'
        />
        <CategoriesItem
          img='https://static-cdn.jtvnw.net/ttv-boxart/488190-285x380.jpg'
          title='Poker'
          viewers='6k Viewers'
          tag1='Card & Board Game'
          tag2='Gambling Game'
        />
      </div>
    </div>
  );
};

export default Categories;
