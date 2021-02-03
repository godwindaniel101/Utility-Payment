<template>
        <div class="x_newItem">
            <div class="x_createBtn">
                <form
                    class="l_form_input"
                    @submit.prevent="$emit('searchInputted', search_input)"
                >
                    <div class="form-group x_form_input">
                        <input
                            name="game_name"
                            type="text"
                            v-model="search_input"
                            class="l_form_input_field form-control x_con_f"
                        />
                    </div>
                    <button class="_btn _btn_blue x_con_b">
                        Search
                    </button>
                </form>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            search_input: ""
        };
    }
};
</script>
