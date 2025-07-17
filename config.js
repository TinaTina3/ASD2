window.cfg = {
    questions: [
        {
            title: "生氣",
            comment: "是噁心，不是生氣。生氣很容易與噁心混淆，因為這兩種表情通常都包括眉毛下垂和嘴唇上揚。然而，照片B的皺鼻，是噁心表情的重要特徵，在憤怒時不會出現",
            options: [
                { image: "images/f16_dfh_ac.jpg", value: false },
                { image: "images/f13_dfh_dc.jpg", value: true },
                { image: "images/f18_dfh_ac.jpg", value: false },
                { image: "images/f20_dfh_ac.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "輕蔑",
            comment: "是噁心，不是輕蔑。三張輕蔑的照片中，嘴角的抿緊很明顯，而  照片中皺鼻子，你看到鼻翼翹起，鼻翼兩側和鼻樑上出現了皺紋，這些都是明顯的噁心跡象。",
            options: [
                { image: "images/f13_dfh_crc.jpg", value: false },
                { image: "images/f16_dfh_dc.jpg", value: true },
                { image: "images/f18_dfh_crc.jpg", value: false },
                { image: "images/f20_dfh_clc.jpg", value: false }
            ],
            gender: "M"
        }
    ],
    feedbacks: [
        { min: 0, max: 49, comment: "加油，再多練習一下" },
        { min: 50, max: 59, comment: "你可以做的更好喔" },
        { min: 60, max: 79, comment: "表現不錯，還有進步空間" },
        { min: 80, max: 89, comment: "做的好，你可以辨識大部分表情" },
        { min: 90, max: 100, comment: "太棒了，你是情緒辨識高手" }
    ]
};
