import inquirer from "inquirer";

(async () => {
    const answer: {
        sentence: string;
    } = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter your sentence to count the words: "
        }
    ]);

    const words = answer.sentence.trim().split(" ");
    console.log(words);
    console.log(`Your sentence word count is ${words.length}`);
})();
