const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTab = require('console.table');
const chalk = require('chalk');
const fig = require('figlet')

connection.connect((err) => {
    if(err) throw err;
    console.log(chalk.yellow.bold(`====================================================================================`));
    console.log('');
    console.log(chalk.greenBright.bold(fig.textSync('Employee CMS Tracker')));
    console.log('');
    console.log(chalk.yellow.bold(`====================================================================================`));
})

const prompt = () => {
    inquirer.prompt([
        {
           name: 'choices',
           type: 'list',
           message: 'Please Select an Option:',
           choices: [
               'View all employees',
               'View all roles',
               'View all departments',
               'View all employees by department',
               
           ]
        }
    ])
}