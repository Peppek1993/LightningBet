<template>
    <div class="p-2 text-center font-thin overflow-auto px-10">
        <h1 class="text-5xl">Top winners</h1>
        <hr />
        <ul>
            <li class="flex justify-center items-center text-3xl m-auto">
                <img :src="require(`../../assets/first.svg`)" class="h-20 w-20" />
                <div class="flex-col">
                    <p>{{this.items.sortedUsers[0].name}}</p>
                    <p>{{this.items.sortedUsers[0].score}}$</p>
                </div>
            </li>
            <li class="flex justify-center items-center m-auto">
                <img :src="require(`../../assets/second-prize.svg`)" class="h-12 w-12" />
                <div class="flex-col text-xl">
                    <p>{{this.items.sortedUsers[1].name}}</p>
                    <p>{{this.items.sortedUsers[1].score}}$</p>
                </div>
            </li>
            <li class="flex justify-center items-center text-xl m-auto">
                <img :src="require(`../../assets/third-prize.svg`)" class="h-10 w-10" />
                <div class="flex-col text-md">
                    <p>{{this.items.sortedUsers[2].name}}</p>
                    <p>{{this.items.sortedUsers[2].score}}$</p>
                </div>
            </li>
        </ul>
        <div
            v-for="(user, index) in items.sortedUsers"
            v-if="index > 2"
            class="flex-col p-2 mt-2 odd:bg-gray-700 even:bg-gray-800 rounded-md text-xl"
        >{{index + 1}}. {{user.name}} {{user.score}}$</div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["items"]),
    },
    beforeMount() {
        let users = this.items.users;
        for (let i = 0; i < users.length; i++) {
            users[i].score = Math.floor(Math.random() * 100000);
        }
        let sortedLeaderboard = users.sort(function (a, b) {
            return parseFloat(b.score) - parseFloat(a.score);
        });
        this.items.sortedUsers = sortedLeaderboard;
    },
};
</script>

<style>
</style>