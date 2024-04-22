import inquirer from "inquirer";

let todos = [];

let condition = true;

while(condition){
    let addTask = await inquirer.prompt([
        {
            name:'todo',
            type:'input',
            message:'Biryani banany k lye kiya kiya ingredient chaye hongy',
        }
]
);
todos.push(addTask.todo);
console.log(`${addTask.todo} Task add successfully in todo-list`)

let addMoreTask =await inquirer.prompt([
    {
     name:"addmore",
     type:"confirm",
     message:"Anything else do you want?",
     default:"False"
    }
]);
condition = addMoreTask.addmore
}
console.log("Your updated Todo-list:" ,todos);
