<template>
    <div>
        <br>
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress-bar" :style="{width: qLength*100 + 'px'}">{{qLength}} / 10</div>
        </div>
        <br>
    </div>
</template>

<script>

import {eventBus} from "../../main";

export default {
    data:function(){
        return{
            qLength:0
        }
    },
    created(){
        eventBus.$on("progressTriggered", (quoteLength) => this.qLength=quoteLength);
    }
}
</script>

