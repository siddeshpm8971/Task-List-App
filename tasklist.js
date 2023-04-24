let getForm=document.querySelector('#Forms');
getForm.addEventListener('submit',function(event){

    let inputElement=document.querySelector('#inputs');
    let task=inputElement.value.trim();
    if(task==""){
        alert("Please Enter a task!!");
    }else{

    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    taskList.push(task);

    localStorage.setItem('tasks',JSON.stringify(taskList));

    displayTasks();
    window.reload();
    }
});



let displayTasks=()=>{
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    if(taskList!==0){
        let taskRows='';
        for(task of taskList){
            taskRows+=`<li class="list-group-item list-group-item-primary list-group-item-action">
                    ${task}
                    <button class="close">
                        <i class="fa fa-trash"></i>
                    </button>
                </li>`;
        }
        document.querySelector('#Task').innerHTML=taskRows;
    }
};
displayTasks();


let removeTasks=document.querySelector('#Task');
removeTasks.addEventListener('click',function(event){

    let targetElement=event.target;
    if(targetElement.classList.contains('fa-trash')){
        let actualElement=targetElement.parentElement.parentElement;
        let selectElement=actualElement.innerText;

        let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
        taskList=taskList.filter(function(task){
            return task.trim()!==selectElement.trim();    
        });
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTasks();
    }
});

let removeAllTasks=document.querySelector('#removes');
removeAllTasks.addEventListener('click',function(){
    localStorage.removeItem('tasks');
    displayTasks();
});

