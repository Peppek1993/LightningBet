<template>
  <div
    class="px-6 text-gray-600"
    v-show="
      this.$route.path === '/sport' ||
        this.$route.path === '/esport' ||
        this.$route.path === '/'
    "
  >
    <div
      v-for="description in descriptions"
      v-show="items.selectedGame == `${description.game}`"
    >
      <h1 class="text-3xl font-bold text-gray-500 py-2">
        {{ description.name }} Betting Odds & Markets
      </h1>
      <hr class="border-gray-700" />
      <h2
        class="text-md font-thin text-gray-500 cursor-pointer py-1"
        @click="descOne = !descOne"
      >
        Game Description
      </h2>

      <p v-show="descOne" class="text-xs font-thin pb-2">
        {{ description.first }}
      </p>
      <hr class="border-gray-700" />
      <h2
        class="text-md font-thin text-gray-500 cursor-pointer py-1"
        @click="descTwo = !descTwo"
      >
        Basic Rules
      </h2>
      <p v-show="descTwo" class="text-xs font-thin pb-2">
        {{ description.second }}
      </p>
      <hr class="border-gray-700" />
      <h2
        class="text-md font-thin text-gray-500 cursor-pointer py-1"
        @click="descThree = !descThree"
      >
        {{ description.name }} Bets
      </h2>
      <p v-show="descThree" class="text-xs font-thin pb-2">
        {{ description.third }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["items"]),
  },
  data() {
    return {
      descOne: true,
      descTwo: true,
      descThree: true,
      descriptions: [
        {
          game: "cs",
          name: "CSGO",
          first:
            "Counter-Strike: Global Offensive (CSGO) is a multiplayer first-person shooter video game released on 21th August, 2012. Game was developed by Hidden Path Entertainment and Valve Corporation.",
          second:
            "The game pits two teams against each other: the Terrorists and the Counter-Terrorists. Both sides are tasked with eliminating the other while also completing separate objectives. The Terrorists, depending on the game mode, must either plant the bomb or defend the hostages, while the Counter-Terrorists must either prevent the bomb from being planted, defuse the bomb, or rescue the hostages. At the end of each round, players are rewarded based on their individual performance with in-game currency to spend on other weapons or utility in subsequent rounds. Winning rounds rewards more money than losing does, and completing objectives such as killing enemies gives cash bonuses.",
          third:
            "Looking for the best CSGO betting site? Join Lightning Bet and bet on CSGO - the second biggest eSports game in terms of prize pools with over 70 million dollars. CSGO betting is by far the most popular among various esports bets. By many described as the most entertaining eSports game for both watching and match betting, CSGO matches offer a variety of unique csgo betting markets! Apart from single and combo match bets we are also offering outstanding bets for in-game events such as bomb plants and AWP frags. Best odds, fast settlements and instant withdrawals with many available payment methods make Lightning Bet a great site to place your CSGO bets.",
        },
        {
          game: "dota",
          name: "DOTA 2",
          first:
            'Dota 2 is a multiplayer online battle arena (MOBA) video game developed and published by Valve Corporation. The game is a sequel to Defense of the Ancients (DotA), which was a community-created mod for Blizzard Entertainments Warcraft III: Reign of Chaos and its expansion pack, The Frozen Throne. Dota 2 is played in matches between two teams of five players, with each team occupying and defending their own separate base on the map. Each of the ten players independently controls a powerful character, known as a "hero", who all have unique abilities and differing styles of play. During a match, players collect experience points and items for their heroes to successfully defeat the opposing teams heroes in player versus player combat. A team wins by being the first to destroy a large structure located in the opposing teams base, called the "Ancient".',
          second:
            "In Dota 2 there are more than 100 unique characters. Each hero has certain abilities that improve with level. Immediately you can imagine the diversity of bundles of characters that complement each other, combinations of spells and tactical schemes of the game. Yes, DotA 2 is one of the few computer games where the outcome is decided by not only the speed of reaction, but also tactical ideas. In a competitive DotA, it is the tactics and the correctly chosen pick of heroes (a set of 5 heroes that the team plays a match with) that determines the outcome of the meeting. To view a match as a spectator you do not need to know all the wisdom. The pleasure will be received in any case! One has only to try. Game ends when enemies’ Ancient will be destroyed.",
          third:
            "Looking for the best Dota 2 betting site? Join Lightning Bet and bet on Dota 2 matches with Cryptocurrencies, VGO Skins and Real Money. Dota 2 betting is one of the most popular categories of Esports Bets. Everyday dozens of Dota 2 matches are being played, offering a variety of Dota 2 betting markets.",
        },
        {
          game: "overwatch",
          name: "Overwatch",
          first:
            'Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment and released on May 24, 2016 for PlayStation 4, Xbox One, and Windows. Described as a "hero shooter", Overwatch assigns players into two teams of six, with each player selecting from a roster of 30 characters, known as "heroes", each with a unique style of play whose roles are divided into three general categories that fit their role. Players on a team work together to secure and defend control points on a map or escort a payload across the map in a limited amount of time.',
          second:
            'Overwatch features a number of different game modes, principally designed around squad-based combat with two opposing teams of six players each. Players select one of over two dozen pre-made hero characters from one of three class types: Damage heroes that deal most of the damage to attack or defend control points, Tank heroes that can absorb a large amount of damage, and Support heroes that provide healing or other buffs for their teammates. Each hero has a unique skill kit, defining their intrinsic attributes like health points and running speed, their primary attacks, several active and passive skills, and an ultimate ability that can only be used after it has been charged through dealing damage. Players can change their hero during the course of a match, as a goal of Overwatchs design was to encourage dynamic team compositions that adapt to the situation. The games genre has been described by some journalists as a "hero shooter", due to its design around specific heroes and classes.',
          third:
            "Looking for the best Overwatch betting site? Join Lightning Bet and bet on Overwatch matches with Cryptocurrencies, VGO Skins and Real Money. OW betting is one of the most popular categories of Esports Bets. Many OW matches are being played on regular basis, offering a variety of Overwatch betting markets. Best odds, fast settlements and instant withdrawals with many available payment methods make Lightning Bet a great site to place your Overwatch bets.",
        },
        {
          game: "r6",
          name: "Rainbow Six",
          first:
            'Tom Clancys Rainbow Six is a media franchise created by American author Tom Clancy about a fictional international counter-terrorist unit called "Rainbow". The franchise began with Clancys novel Rainbow Six, which was adapted into a series of tactical first-person shooter video games. The first game was developed by Red Storm Entertainment, while the novel was being written. The game later spawned a number of sequels and expansion packs. Red Storm was later acquired by Ubisoft, who currently develops and publishes the games. Mobile phone versions of the game are developed and published by Gameloft. Rainbow Six and its sequels defined the tactical shooter genre, forcing players to focus more time and effort on stealth, teamwork, and tactics rather than on sheer firepower. With some of the more recent releases however, the game has taken on more of a "mainstream" first-person shooter approach in an attempt to appeal to a wider audience.',
          second:
            "The game has two teams comprised of five players- one team attacks and the other defends. The main objective is simple: attackers need to plant the bomb and successfully let it detonate, while the defenders need to prevent this from happening.",
          third:
            "Looking for the best Rainbow Six: Siege betting site? Join Lightning Bet and bet on Rainbow Six: Siege matches with Cryptocurrencies, VGO Skins and Real Money. Rainbow Six betting is not as popular as CSGO or other esports bets but is steadily gaining popularity. R6 matches are being played regularly, offering a variety of Rainbow Six: Siege betting markets. Best odds, fast settlements and instant withdrawals with many available payment methods make Lightning Bet a great site to place your Rainbow Six: Siege bets.",
        },
        {
          game: "lol",
          name: "League of Legends",
          first:
            "League of Legends (abbreviated LoL) is a multiplayer online battle arena video game developed and published by Riot Games for Microsoft Windows and macOS. The game follows a freemium model and is supported by microtransactions, and was inspired by the Warcraft III: The Frozen Throne mod, Defense of the Ancients.",
          second:
            "In all game modes, players control characters called champions, chosen or assigned every match, who each have a set of unique abilities. Champions begin every match at a low level, and then gain experience over the course of the match to achieve a maximum level of 18. Gaining champion levels in matches allows players to unlock their champions special abilities and augment them in a number of ways unique to each character. If a champion loses all their health, they are defeated, but are automatically revived in their base after enough time passes. Players also begin each match with a low amount of gold, and can earn additional gold throughout the match in a variety of ways: by killing non-player characters known as minions and monsters; by killing or helping to kill enemy players; by destroying enemy structures; passively over time; and through unique item interactions or champion abilities. This gold can then be spent throughout the match to buy in-game items that further augment each champions abilities and game play in a variety of ways. Champion experience, gold earned, and items bought are specific to each match and do not carry over to subsequent matches. Thus, all players begin each match on more-or-less equal footing relative to their opposing team.",
          third:
            "Looking for the best League of Legends betting site? Join Lightning Bet and bet on League of Legends matches with Cryptocurrencies, VGO Skins and Real Money. LoL betting is one of the most popular categories of Esports Bets. Everyday dozens of LoL matches are being played, offering a variety of League of Legends betting markets. Best odds, fast settlements and instant withdrawals with many available payment methods make Lightning Bet a great site to place your League of Legends bets.",
        },
        {
          game: "esport",
          name: "Esports",
          first:
            "Esports is a phenomenon that is quickly growing into the mainstream. Competitive video gaming was a dream for many growing up and whilst few of us dreamt of watching it, we always wondered what was possible if you really mastered a game. Esports lets you fulfil that fantasy, watching the best gamers alive take each other on in whatever game you choose - whilst Dota 2, League of Legends and CSGO are the biggest and most watched, if your game of choice is more niche, there are games and tournaments for you to watch - and if you’d like to bet on esports, there’s plenty of opportunity to do that too. The beauty of these games is that though many of them are complex, the entry level to watching them is simple as the objective in most is obvious. Kill the enemy team, destroy their base, score more points - whilst the mechanics might be alien to you, the end goal will almost never be.",
          second:
            "If you’re new to any of these games, watching them can be really fun and you will quickly learn how the game works. Honestly, if you’ve never experienced esports, watching a big event and all the hype around it is the best advice we can give you. It’s a strange experience at first - if you’ve never watched esports you’ll be amazed at the production value, the quality and how interesting and exciting it is to watch. We’re sure you’ll be surprised at how much fun you’re having, no matter how sceptical you are. If that hooks you in, you won’t be able to stop, counting down the days ‘til the next tournament - and then when you think you’re an expert, you can start making money with esports bets. Esports betting has never been easier and safer, and if you know your stuff, you can beat the bookie.",
          third:
            "Plenty of people love betting every now and again on their favourite sport, so esports betting is a familiar concept to sports fans but it includes games - making it a lot more fun for many nerds like you and I! Esports bets range from betting on the match winner, tournament winner, handicap bets; all the way to more abstract bets. Want to bet on when the first sniper kill happens in a CSGO game? With Lightning Bet you can bet on esports however you want. Lightning Bet is a dedicated esports betting site, with odds on League of Legends, Dota 2, CSGO, Call of Duty, Overwatch and many many more. Whatever your esport, bet on esports at Lightning Bet.",
        },
        {
          game: "sport",
          name: "Sport",
          first:
            "Sport is as old as humanity - we are all, and have always been, competitive, and sport allows us to compete physically with other humans. Whilst cavemen hunting and fishing are very different to the Premier League of modern times, the concept of watching and playing sports is the same as it always has been. Whether your sport of choice involves a bat and ball or just your own body, playing sport is an exhilarating experience that is almost impossible to match. Watching it is a pretty close second, however. The thing about sport is, nearly every single one is simple enough for first-time watchers but with tons of depth for long-term fans. Football, or soccer, for example, has been played for hundreds, maybe thousands, of years - and we’re no closer to ‘solving’ the game. Though basketball is simple to understand for someone who doesn’t watch the NBA every week, for someone who does, there is so much more than meets the naked eye.",
          second:
            "Sports and betting have always gone hand in hand. Whether you’re trying to make money picking big underdogs or just wanting to spice up the game, betting on sports makes everything more fun. If you know your stuff, sports betting can be lucrative especially if your sport isn’t as intensely watched. Even when it comes to betting on the Premier League, there’s still room to beat the bookie if you bet wisely! Make sure you do your research and watch plenty of whatever sport you want to bet on and you can impress your friends and family with your winnings in no time.",
          third:
            "Whether it’s football (aka soccer), basketball, baseball, hockey, MMA, tennis or volleyball that appeals to you, Lightning Bet is your online sports betting home. Bet on sports and get the best sports odds with safe and immediate withdrawal and multiple deposit methods including VGO skins and cryptocurrencies at Lightning Bet. Bet on match winners, tournament winners, handicap bets or combo your sports bets to get the best sports odds you can. No matter your sport of choice, Lightning Bet is the best place to bet on sports.",
        },
        {
          game: "quidditch",
          name: "Quidditch",
          first:
            "Quidditch is a fictional sport invented by author J.K. Rowling for her fantasy book series Harry Potter. It is a dangerous but popular sport played by witches and wizards riding flying broomsticks.",
          second:
            "Matches are played on a large oval pitch with three ring-shaped goals of different heights on each side, between two opposing teams of seven players each: three Chasers, two Beaters, the Keeper, and the Seeker. The Chasers and the Keeper respectively score with and defend the goals against the Quaffle; the two Beaters bat the Bludgers away from their teammates and towards their opponents; and the Seeker locates and catches the Golden Snitch, whose capture simultaneously wins the Seekers team 150 points and ends the game. The team with the most points at the end wins.",
          third:
            "Here at Lightning Bet, you can bet on quidditch safe in the knowledge that you’re getting the best quidditch odds as well as multiple ways to pay and secure and immediate withdrawal - betting on quidditch has never been so easy.",
        },
        {
          game: "ice_hockey",
          name: "Ice Hockey",
          first:
            "Ice hockey is violent, intense and loads of fun to watch. Played at a blistering speed, due to the intrinsic speed boost gained by playing on ice, ice hockey is very similar to football but with a ‘fast-forward’ button. Known for its propensity for violence, the 6v6 chaos of ice hockey has made the game popular in North America especially. The biggest difference between hockey and other sports is the use of a puck - a rubber disc-shaped object - instead of a ball and the use of hockey sticks instead of hands or feet. Well, that, and the ice rink. That’s quite important.",
          second:
            "Ice hockey is quite similar to football in the sense that there aren’t too many goals, and as such, you can be a bit more confident in the underdog when you’re betting on ice hockey. Due to the volatility of the sport, betting on ice hockey can be incredibly exhilarating. Injuries and fatigue are common because the sport is so brutal, and a badly timed injury can turn your outsider ice hockey bets into a winning one.",
          third:
            "Lightning Bet offers secure withdrawals, multiple deposit methods including cryptocurrencies and skins and importantly the best ice hockey odds on the market. Bet on ice hockey with Lightning Bet safe in the knowledge that you’re making the biggest bang for your buck and can withdraw immediately afterwards. Start betting on ice hockey today!",
        },
        {
          game: "volleyball",
          name: "Volleybayll",
          first:
            "Volleyball is a 6v6 game based around keeping the ball up on your side and grounding it on your opponents. Though it has vague similarities to badminton in having to get the ball over a high net, there is no racket used and there is more emphasis on setting up your teammates to ‘spike’ the ball down on the opponents’ side of the net, and as such teamplay is much more important than individual skill. Whilst it can be played on a beach or on grass, most volleyball is played inside.",
          second:
            "The most important tournament in volleyball is in the Olympics, but the World Cup and the World Championships are still hotly contested. Over a regular season, teams play a lot of games in a short amount of time - which means you can bet on volleyball frequently and make money quickly if you know your stuff.",
          third:
            "Here at Lightning Bet, you can bet on volleyball safe in the knowledge that you’re getting the best volleyball odds as well as multiple ways to pay and secure and immediate withdrawal - betting on volleyball has never been so easy.",
        },
        {
          game: "basketball",
          name: "Basketball",
          first:
            "Basketball is the sport of giants - in no other sport is a 188cm guy considered small, or a 194cm guy given the position of ‘Small Forward’. The beauty of basketball, similar to football, is in its simplicity. Throw the big orange ball into the hoop - two points from inside the key semi-circle and three from outside. Whilst basketball is popular in some European countries, the biggest and best teams are spread around the United States. The NBA is a huge spectacle (both literally and figuratively, given the size of the players) and attracts millions of fans not just in America but all over the world.",
          second:
            "Basketball is a simple 5v5 invasion game that revolves around sharp movement, individual shooting and ball-carrying skill and intensity. The breakneck speed of the sport sets it apart from other invasion games, and the flashy dunks and three-pointers bring excitement that takes away from the less interesting fundamentals of defending. Basketball is inherently high scoring, which makes betting on basketball a little safer than football - because better teams tend to be more likely to win as there is less randomness. That said, if you want to find upset wins, if a ‘weaker’ team just starts sinking every three-pointer, there’s a great opportunity there for a basketball bet on a massive underdog.",
          third:
            "Basketball is a simple 5v5 invasion game that revolves around sharp movement, individual shooting and ball-carrying skill and intensity. The breakneck speed of the sport sets it apart from other invasion games, and the flashy dunks and three-pointers bring excitement that takes away from the less interesting fundamentals of defending. Basketball is inherently high scoring, which makes betting on basketball a little safer than football - because better teams tend to be more likely to win as there is less randomness. That said, if you want to find upset wins, if a ‘weaker’ team just starts sinking every three-pointer, there’s a great opportunity there for a basketball bet on a massive underdog.",
        },
        {
          game: "table_tennis",
          name: "Table Tennis",
          first:
            "Tennis is a 1v1, or sometimes 2v2, racket sport that focuses on power and placement, combined with your nimbleness and quickness to cover the ground and put yourself in a position to use your power. Played on grass, clay, hardcourt or on an indoor court, each involving different skill sets, tennis is grueling but games between the best players in the world can be fascinating for hours on end.",
          second:
            "Tennis has a very intricate and detailed seeding system that ranks every professional in the world, which makes looking at favourites and underdogs easier for people new to betting on tennis. Early rounds don’t see too many upsets - but the ones that do win tend to give huge odds due to the discrepancy between the low and high ranked players. Later on into tournaments you get the really high stakes games, and this is when betting on tennis gets really interesting. Games between two top ten players can be incredibly tight and makes watching your tennis bets play out nail-biting and adrenaline filled.",
          third:
            "For the best tennis odds, Lightning Bet have you covered. Whether your tennis bets are on the high seed, the low seed or you’re betting on a close game, use Lightning Bet for the best tennis odds and secure and immediate withdrawals. Deposit with real money, cryptocurrencies or VGO skins and start betting on tennis now!",
        },
        {
          game: "american_football",
          name: "American Football",
          first:
            "Despite the protestations of British people, Americans insist on calling their sport football - even though most of it is played with the hands and the ball isn’t particularly round. American football is a highly tactical invasion sport. Gaining ground via passes from the quarterback or just straight up running forward with the running back is the aim of the game, moving slowly up the pitch until you explode into the end zone. Whilst at first it just looks like a mosh pit, it takes a while to understand all of the plays and tactics involved in both the offense and defense, and then the sport becomes a lot more interesting to watch.",
          second:
            "Once you have that knowledge, you can bet on American football and make some money of your own. If you’ve got the read on whose defense is leaky or how the offense can make their way through a tight defense, betting on American football becomes a fun - and lucrative - experience. With loads of games happening at once, too, during the weekend, there are loads of American football bets to be made.",
          third:
            "Whether you’re betting on multiple games at once or just want to bet on the big games, get the best American football odds at Lightning Bet. Deposit with cryptocurrencies, VGO skins or good old money and withdraw safely after your winning American football bets today!",
        },
      ],
    }
  },
}
</script>

<style></style>
