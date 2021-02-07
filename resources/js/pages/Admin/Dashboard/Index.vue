<template>
    <div>
        <welcome/>
        <sub-module/>
    </div>
</template>
<script>
import Welcome from './Welcome'
import SubModule from './SubModule'
export default {
    components:{
        SubModule,
        Welcome
    }
}
</script>