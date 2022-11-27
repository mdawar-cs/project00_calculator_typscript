#!user/bin/env node
import chalkAnimation from "chalk-animation";
const sleep = () => { return new Promise((res) => { setTimeout(res, 3000); }); };
async function greet() {
    let karaokeTitle = chalkAnimation.karaoke("Welcome to Calculator App,Lets do some calculation");
    await sleep();
    karaokeTitle.stop();
}
greet();
