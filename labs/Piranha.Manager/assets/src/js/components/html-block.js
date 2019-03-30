/*global
    piranha
*/

Vue.component("html-block", {
    props: ["uid", "model"],
    methods: {
        onBlur: function (e) {
            this.model.body.value = e.target.innerHTML;
        }
    },
    computed: {
        isEmpty: function () {
            return piranha.utils.isEmptyHtml(this.model.body.value);
        }
    },
    mounted: function () {
        piranha.editor.addInline(this.uid);
    },
    beforeDestroy: function () {
        piranha.editor.remove(this.uid);
    },
    template:
        "<div :class='{ empty: isEmpty }'>" +
        "  <div contenteditable='true' :id='uid' spellcheck='false' v-html='model.body.value' v-on:blur='onBlur'></div>" +
        "</div>"
});