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
    prompt();
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
            'View role salary',
            'Update employee role',
            'Update employee manager',
            'Add employee',
            'Add role',
            'Add department',
            'Remove employee',
            'Remove role',
            'Remove department',
            'Quit'
           ]
        }
    ])
    .then((ans) => {
        const {choices} = ans;

        switch(choices) {
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all employees by department':
                viewAllEmployeesByDep();
                break;
            case 'View role salary':
                viewRoleSalary();
                break;
            case 'Update employee role':
                updateEmployeeRole();
                break;
            case 'Update employee manager':
                updateEmployeeManager();
                break;
            case 'Add employee':
                addEmployee();
                break;
            case 'Add role':
                addRole();
                break;
            case 'Add department':
                addDepartment();
                break;
            case 'Remove employee':
                remEmployee();
                break;
            case 'Remove role':
                remRole();
                break;
            case 'Remove department':
                remDepartment();
                break;
            case 'Quit':
                connection.end();
                break;
        }
    })
}
