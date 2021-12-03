const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTab = require('console.table');
const chalk = require('chalk');
const fig = require('figlet')

connection.connect((err) => {
    if(err) throw err;
    console.log(chalk.yellow.bold(`====================================================================================`));
    console.log('');
    console.log(chalk.greenBright.bold(figlet.textSync('Employee CMS Tracker')));
    console.log('');
    console.log(chalk.yellow.bold(`====================================================================================`));
})