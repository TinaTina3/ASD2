// config.js
// Ce script définit une variable globale `cfg` utilisée par index.html

window.cfg = {
  questions: [
    {
      title: "Disgust",
      options: [
        { image: "images/a1.jpg", comment: "Commentaire pour la réponse A1.", value: 1 },
        { image: "images/a2.jpg", comment: "Commentaire pour la réponse A2.", value: 2 },
        { image: "images/a3.jpg", comment: "Commentaire pour la réponse A3.", value: 3 },
        { image: "images/a4.jpg", comment: "Commentaire pour la réponse A4.", value: 4 }
      ]
    },
    {
      title: "Contempt",
      options: [
        { image: "images\a1.jpg", comment: "Retour sur A1.", value: 1 },
        { image: "images\a2.jpg", comment: "Retour sur A2.", value: 2 },
        { image: "images\a3.jpg", comment: "Retour sur A3.", value: 3 },
        { image: "images\a4.jpg", comment: "Retour sur A4.", value: 4 }
      ]
    },
    {
      title: "Question 3",
      options: [
        { image: "images\a1.jpg", comment: "Retour sur A1.", value: true },
        { image: "images\a2.jpg", comment: "Retour sur A2.", value: false },
        { image: "images\a3.jpg", comment: "Retour sur A3.", value: 3 },
        { image: "images\a4.jpg", comment: "Retour sur A4.", value: 4 },
        { image: "images\a1.jpg", comment: "Retour sur A5.", value: 5 }
      ]
    },
    {
      title: "Question 4",
      options: [
        { image: "images\f13_dfh_fc.jpg", comment: "Great thats totally it", value: 1 },
        { image: "images\f13_dfh_ac.jpg", comment: "No good !", value: 2 },
        { image: "images\f13_dfh_crc.jpg", comment: "Almost there.No good !", value: 3 },
        { image: "images\f13_dfh_dc.jpg", comment: "Very bad", value: 4 }
      ]
    }
    // Ajoutez d'autres questions ici…
  ]
};
