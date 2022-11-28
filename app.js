#!user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => { return new Promise((res) => { setTimeout(res, 2000); }); };
async function greet() {
    let rainbowTitle = chalkAnimation.rainbow("Welcome to Calculator App, Lets do some calculation By M.Dawar");
    await sleep();
    rainbowTitle.stop();
}
await greet();
async function askQuestion() {
    var answers = await inquirer
        .prompt([
        {
            type: 'list',
            name: 'operator',
            message: "What Operation you want to perfom?",
            choices: ["+ Addition", "- Subtraction", "* Multiplication", "/ Division", "^ Exponent"]
        },
        {
            type: 'number',
            name: 'num1',
            message: "Enter Number 1: ",
            default: () => { },
            validate: function (num1) {
                if (!isNaN(num1)) {
                    console.log(num1);
                    return true;
                }
                else {
                    console.log(".  Enter valid number");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'num2',
            message: "Enter Number 2: ",
        }
    ]);
    switch (answers.operator) {
        case "+ Addition":
            console.log(chalk.greenBright(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
            break;
        case "- Subtraction":
            console.log(chalk.greenBright(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
            break;
        case "* Multiplication":
            console.log(chalk.greenBright(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
            break;
        case "/ Division":
            console.log(chalk.greenBright(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
            break;
        case "^ Exponent":
            console.log(chalk.greenBright(`${answers.num1} ^ ${answers.num2} = ${answers.num1 ** answers.num2}`));
            break;
        default:
            console.log("Something went wrong.");
            break;
    }
}
// askQuestion();
async function runAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt([
            {
                type: 'input',
                name: 'restart',
                message: "Do you want to continue calculation? Press y or Y"
            }
        ]);
    } while (again.restart == 'y' || again.restart == 'Y');
}
await runAgain();
