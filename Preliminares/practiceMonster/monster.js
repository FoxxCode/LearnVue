window.addEventListener('load', function(){
    new Vue({
        el:"#app",
        data:{
            bin:false,
            playerHP:0,
            monsterHP:0,
            attacksArr:{atksMonster:[],atksPlayer:[]},
            isHeal:false
        },
        methods:{
            start:function(){
                this.bin=!this.bin;
                this.playerHP=100;
                this.monsterHP=100;
            },
            round:function(action){
                var hitPlayer,hitMonster;

                if(this.monsterHP>0){
                    if(action!="giveup"){
                        if(action!="heal"){
    
                            if (action=="atk") {
                                hitPlayer=Math.round((Math.random()*(15)));           
                            } else if(action=="atkSpecial"){
                                hitPlayer=Math.round((Math.random()*(5) + 15));           
                            }
        
                            this.attacksArr.atksPlayer.push(hitPlayer);
                            this.monsterHP=this.monsterHP-hitPlayer;     
                            
                        }else{
                            this.playerHP = this.playerHP + Math.round((Math.random()*(15)));
    
                        }
                        
                        hitMonster=Math.round((Math.random()*(15)));
                        this.attacksArr.atksMonster.push(hitMonster);
                        this.playerHP=this.playerHP-hitMonster;
    
                    }else{
                        this.bin=!this.bin;
                    }
                }else{
                    alert("Ganaste!!");
                    this.bin=!this.bin;
                    this.attacksArr.atksMonster=[];
                    this.attacksArr.atksPlayer=[];
                }

                
            }
        }
    });
});