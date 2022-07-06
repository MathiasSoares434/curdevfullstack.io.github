const main = {
    tasks: [],
    
    
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
        this.getStoraged()
        this.buildTasks()
    },
    cacheSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')
        this.$inputTask = document.querySelector('#inputTask')
        this.$list = document.querySelector('#list')
        this.$removeButtons = document.querySelectorAll('.remove')
    },
    getTaskHtml: function(task){
        return `
        <li class= "${isDone ? 'done' : ''} " data-task= "${task}">
        <div class="check"></div>
            <label class="task"> 
                ${task}

            </label>
        <button class="remove"></button>                
        </li>
` 
    },

    inserHTML: function(elemente, htmlString){
        elemente.innerHTML += htmlString

        this.cacheSelectors()
        this.bindEvents()
    },

    getStoraged:function(){
        const tasks = localStorage.getItem('tasks')
        if(tasks){
            this.tasks = JSON.parse(tasks)
        } else{
            localStorage.getItem('tasks', JSON.stringify([]))
        }
    },
    buildTasks: function(){
       const html = ''
        this.tasks.forEach(item => {
            html += this.getTaskHtml(item.task)
        })

        this.$list.innerHTML = html

    },
    bindEvents: function(){
        const self = this
        
        this.$checkButtons.forEach(function(button){
        button.onclick = self.events.checkButton_click
        })    
        this.$inputTask.onkeypress = self.events.inputTask_keypress.bind(this)
        
        this.$removeButtons.forEach(function(button){
            button.onclick = self.events.removeButton_click.bind(self)
        })
    },

    events: {
        checkButton_click: function(e){
           const li = e.target.parentElement
           const value = li.dataset['task']
           const isDone = li.classList.contains('done') 
           
           if(!isDone){
               return li.classList.add('done')
           }
           li.classList.remove('done')
        },
        inputTask_keypress: function(e){      
            const key = e.key
            const value = e.target.value
            const isDone = false
      
            if (key === 'Enter') {
              const taskHtml = this.getTaskHtml(value, isDone)
      
              this.insertHTML(this.$list, taskHtml)
      
              e.target.value = ''        
      
              const savedTasks = localStorage.getItem('tasks')
              const savedTasksArr = JSON.parse(savedTasks)        
      
              const arrTasks = [
                { task: value, done: isDone },
                ...savedTasksArr,
              ]
      
              const jsonTasks = JSON.stringify(arrTasks)
      
              this.tasks = arrTasks
              localStorage.setItem('tasks', jsonTasks)
            }
          },
        removeButton_click: function(e){
           const li = e.target.parentElement
           const value = e.target.dataset['task']
           
           console.log(this.tasks) 
           
           const newTasksState = this.tasks.filter(item => {
            console.log(item.task, value)    
            return item.task !== value
            })
            
            localStorage.setItem('tasks', JSON.stringify(newTasksState))
            this.tasks = newTasksState
            
            li.classList.add('removed')
            
            setTimeout(function () {
                li.classList.add('hidden')
            }, 300) 
        }    
        
    
    
    
    }


    }

    

main.init()