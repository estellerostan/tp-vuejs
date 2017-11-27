var app = new  Vue({
    el: '#app',
    data: {
        pageCount: 1
    },
    methods: {
        getPaginationRequest: function () {
            if (event) {
                var el = event.target;

                if(this.pageCount >= 1) {
                    if(el.id == "next")  {
                        document.querySelector("#" + el.previousElementSibling.id).removeAttribute("disabled", "")
                    }
                    else if (el.id == "previous") {
                        el.removeAttribute("disabled");
                    }
                }

                if(el.id == "previous") {
                    if (this.pageCount > 1) {
                        this.pageCount--;
                    }
                    else {
                        document.querySelector("#" + el.id).setAttribute("disabled", "");
                    }
                } else if(el.id == "next")  {
                    this.pageCount++;
                }

                let url = "/api/restaurants?page=" + this.pageCount;

                fetch(url)
                    .then(function (responseJSON) {
                        responseJSON.json()
                            .then(function (res) {
                                // Maintenant res est un vrai objet JavaScript
                                afficheReponseGET(res);
                            });
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            }
        }
    }
});