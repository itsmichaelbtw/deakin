<template>
    <div class="main">
        <div class="align">
            <div class="alert" v-if="showAlert">Your enquiry has been sent!</div>
            <div class="contact-box">
                <h1>Contact Us</h1>
                <div class="contact-input">
                    <label>First name</label>
                    <input placeholder="Click to edit" v-model="name"/>
                </div>
                <div class="contact-input">
                    <label>Email</label>
                    <input placeholder="Click to edit" v-model="email"/>
                </div>
                <div class="contact-input">
                    <label>Enquiry</label>
                    <textarea placeholder="Click to edit" v-model="enquiry"/>
                </div>
                <div class="contact-input">
                    <button v-on:click="send" v-bind:disabled="isLoading">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "contact",
    data: function() {
        return {
            name: "",
            email: "",
            enquiry: "",
            isLoading: false,
            showAlert: false
        }
    },
    methods: {
        send: async function() {
            if (this.name && this.email && this.enquiry) {
                this.isLoading = true;

                await new Promise((resolve) => {
                    setTimeout(function(){
                        resolve();
                    }, 750);
                });

                this.name = "";
                this.email = "";
                this.enquiry = "";
                this.isLoading = false;
                this.showAlert = true;
            }
        }
    }
}
</script>

<style>
    .main {
        position: relative;
        width: 100%;
    }

    .align {
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .alert {
        width: 100%;
        max-width: 460px;

        margin-bottom: 24px;
        background: rgba(46, 204, 113, 0.4);
        border: 1px solid rgba(46, 204, 113,1.0);
        padding: 8px 14px;
    }

    .contact-box {
        width: 100%;
        max-width: 460px;
        margin: 0 20px;

        background: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 22px 28px;

        display: flex;
        flex-direction: column;
    }

    .contact-box h1 {
        font-size: 22px;
        text-align: center;
    }

    .contact-input label {
        font-size: 18px;
        margin-bottom: 6px;
    }

    .contact-input {
        position: relative;
        display: flex;
        flex-direction: column;

        margin-top: 14px;
    }

    .contact-input input {
        padding: 6px 8px;
        font-size: 16px;

        border: 1px solid rgba(0, 0, 0, 0.4);
    }

    .contact-input textarea {
        resize: vertical;
        padding: 6px 8px;
        font-size: 16px;
        min-height: 110px;
        max-height: 140px;
    }

    .contact-input button {
        padding: 8px 0;
        border: 0;
        outline: 0;
        background-color: #283592;
        color: white;
        cursor: pointer;
        font-size: 18px;
    }

    .contact-input button:hover {
        background: RGBA(40, 53, 146, 0.7);
    }

    .contact-input button[disabled] {
        opacity: 0.4;
        cursor: wait;
    }
</style>
