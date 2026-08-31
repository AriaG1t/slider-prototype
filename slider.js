let items = document.getElementsByClassName('item')
        let count = 0
        let left = document.getElementById('left')
        let right = document.getElementById('right')

        if(window.innerWidth < 768){
            for(let i = 0; i < items.length; i++){items[i].style.width='100%'}
            items[count].style.display = 'block'
        }
        else{
            for(let i = 0; i < items.length; i++){items[i].style.width='40%'}
            items[count].style.display = 'block'
            items[count + 1].style.display = 'block'
        }

        window.addEventListener('resize', function(){
            if(window.innerWidth < 768){
                for(let i = 0; i < items.length; i++){items[i].style.width='100%'}
                items[count].style.display = 'block'
                items[count + 1].style.display = 'none'
                if (count==items.length-2){
                    right.style.display = 'block'
                }
            }
            else{
                for(let i = 0; i < items.length; i++){items[i].style.width='40%'}
                if (count==items.length-2){
                    right.style.display = 'none'
                }
                if (count==items.length-1){
                    count--
                    items[count].style.display = 'block'
                    items[count + 1].style.display = 'block'
                }
                else{
                    items[count].style.display = 'block'
                    items[count + 1].style.display = 'block'
                }
            }

        })

        right.addEventListener('click',function(){
                count += 1
                for(let i = 0; i < count; i++){
                    items[i].style.display = 'none'
                }
                for(let i = count + 2; i < items.length; i++){
                    items[i].style.display = 'none'
                }
                if(window.innerWidth < 768){
                    items[count].style.display = 'block'
                    
                    if(count == items.length-1){
                        right.style.display='none'
                    }
                    else{
                        right.style.display='block'
                        left.style.display='block'
                    }
                }
                else{
                    items[count].style.display = 'block'
                    items[count + 1].style.display = 'block'
                    if(count == items.length-2){
                        right.style.display='none'
                    }
                    else{
                        right.style.display='block'
                        left.style.display='block'
                    }
            }})

        left.addEventListener('click',function(){
                count -= 1
                items[count].style.display = 'block'
                items[count + 1].style.display = 'block'
                for(let i = 0; i < count; i++){
                    items[i].style.display = 'none'
                }
                for(let i = count + 2; i < items.length; i++){
                    items[i].style.display = 'none'
                }
                if(count==0){
                    left.style.display='none'
                }
                else{
                    right.style.display='block'
                    left.style.display='block'
                }
            })

        left.style.display='none'