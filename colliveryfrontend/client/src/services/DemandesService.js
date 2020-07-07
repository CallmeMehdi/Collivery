import Api from "@/services/Api";
export default {
  getCollivery(payload) {
    return Api().get("Colliverys/", payload);
  },
  addCollivery(payload) {
    return Api().post("Colliverys/", payload);
  },
  cancelCollivery(payload){
    return Api().delete("Colliverys/",payload);
  }

};
