window.cfg = {
    questions: [
        {
            title: "生氣",
            comment: "代表噁心，而不是生氣。生氣很容易與噁心混淆，甚至被誤認為噁心，因為這兩個表情通常都包括眉毛下垂和嘴唇上揚。然而，照片中最明顯的代表噁心的特徵是鼻子皺了起來，這個面部動作不會出現在生氣的表情。",
            options: [
                { image: "images/f16_dfh_ac.jpg", value: false },
                { image: "images/f13_dfh_dc.jpg", value: true },
                { image: "images/f18_dfh_ac.jpg", value: false },
                { image: "images/f20_dfh_ac.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "生氣",
            comment: "代表害怕，不是生氣。生氣的面部動作包括眉毛下垂，嘴唇上揚緊閉和眼神睜大瞪視。而害怕的眉毛則明顯上揚，嘴唇緊繃張開；害怕表情的面部動作還包括上眼瞼上揚，下眼瞼緊繃，以及眉毛皺在一起。",
            options: [
                { image: "images/f16_dfh_ac.jpg", value: false },
                { image: "images/f13_dfh_fc.jpg", value: true },
                { image: "images/f18_dfh_ac.jpg", value: false },
                { image: "images/f20_dfh_ac.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "生氣",
            comment: "是傷心，不是生氣。生氣的面部動作包括眉毛下垂，嘴唇上揚緊閉、和眼神睜大怒視。而傷心有一個顯著的特徵是眉毛內角上揚，這些肌肉不容易自主控制，所以很難偽裝，傷心的其他表情還包括上眼瞼下垂，嘴角向下拉。",
            options: [
                { image: "images/f16_dfh_ac.jpg", value: false },
                { image: "images/f18_dfh_sc.jpg", value: true },
                { image: "images/f13_dfh_ac.jpg", value: false },
                { image: "images/f20_dfh_ac.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "輕蔑",
            comment: "代表噁心，而非輕蔑。三張輕蔑的照片中，嘴角的緊繃很明顯，而那張噁心照片中的鼻子有明顯的皺褶，當你看到鼻翼翹起，鼻翼兩側和鼻樑上出現了皺紋，這些都是噁心表情的顯著特徵。",
            options: [
                { image: "images/f13_dfh_crc.jpg", value: false },
                { image: "images/f16_dfh_dc.jpg", value: true },
                { image: "images/f18_dfh_crc.jpg", value: false },
                { image: "images/f20_dfh_crc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "輕蔑",
            comment: "是驚訝，不是輕蔑。單側上揚的嘴角動作表達的是輕蔑，它是唯一一種只用到半邊臉表達的情緒，意味著表情不對稱。而驚訝的表情是，上眼瞼上揚，眉毛也上揚，下巴往下掉。",
            options: [
                { image: "images/f16_dfh_crc.jpg", value: false },
                { image: "images/f20_dfh_pc.jpg", value: true },
                { image: "images/f18_dfh_crc.jpg", value: false },
                { image: "images/f13_dfh_crc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "輕蔑",
            comment: "是生氣，不是輕蔑。單側上揚的嘴角動作表達的是輕蔑，它是唯一一種只用半側臉表達的情緒，意味著表情不對稱。生氣的面部動作包括眉毛下垂，嘴唇上揚緊閉和眼神睜大怒視。",
            options: [
                { image: "images/f16_dfh_crc.jpg", value: false },
                { image: "images/f13_dfh_ac.jpg", value: true },
                { image: "images/f18_dfh_crc.jpg", value: false },
                { image: "images/f20_dfh_crc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "噁心",
            comment: "代表生氣，而不是噁心。生氣的照片顯示三種通常與生氣相關的動作組合—眉毛下垂、眼瞼緊繃和眼神睜大怒視。而皺鼻子是噁心表情最容易辨別的顯著特徵。",
            options: [
                { image: "images/f13_dfh_dc.jpg", value: false },
                { image: "images/f16_dfh_ac.jpg", value: true },
                { image: "images/f18_dfh_dc.jpg", value: false },
                { image: "images/f20_dfh_dc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "噁心",
            comment: "是害怕，不是噁心。噁心最容易辨識和明顯的特徵就是皺鼻子。而害怕的表情則是眉毛上揚，眉毛皺在一起，上眼瞼上揚，下眼瞼緊繃，嘴唇緊繃張開。",
            options: [
                { image: "images/f13_dfh_dc.jpg", value: false },
                { image: "images/f16_dfh_fc.jpg", value: true },
                { image: "images/f18_dfh_dc.jpg", value: false },
                { image: "images/f20_dfh_dc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "噁心",
            comment: "是傷心，不是噁心。噁心最容易辨識的特徵就是皺鼻子。而傷心最明顯的特徵是眉毛內角上揚，這些肌肉不容易自主控制，所以很難偽裝，傷心的其他表情還包括上眼瞼下垂，嘴角向下拉。",
            options: [
                { image: "images/f16_dfh_dc.jpg", value: false },
                { image: "images/f20_dfh_sc.jpg", value: true },
                { image: "images/f18_dfh_dc.jpg", value: false },
                { image: "images/f13_dfh_dc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "開心",
            comment: "代表輕蔑，而不是開心。單側上揚的嘴角動作，表達的是輕蔑而非開心。輕蔑是基本表情中唯一一個透過單側(僅一側)上揚嘴角來準確表達的面部表情。",
            options: [
                { image: "images/f16_dfh_hc.jpg", value: false },
                { image: "images/f18_dfh_crc.jpg", value: true },
                { image: "images/f13_dfh_hc.jpg", value: false },
                { image: "images/f20_dfh_hc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "開心",
            comment: "不帶有表情，而非開心。真正開心的微笑，最明顯的特徵就是眼角有魚尾紋，開心時臉頰會上揚，嘴唇往後拉而露齒微笑。",
            options: [
                { image: "images/f16_dfh_hc.jpg", value: false },
                { image: "images/f13_dfh_nc.jpg", value: true },
                { image: "images/f18_dfh_hc.jpg", value: false },
                { image: "images/f20_dfh_hc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "開心",
            comment: "是驚訝，不是開心。真正開心的微笑，最明顯的特徵就是眼角有魚尾紋，開心的臉頰會上揚，嘴唇往後拉而露齒微笑。而驚訝的表情是，上眼瞼上揚，眉毛也上揚，下巴往下掉。",
            options: [
                { image: "images/f16_dfh_hc.jpg", value: false },
                { image: "images/f13_dfh_pc.jpg", value: true },
                { image: "images/f18_dfh_hc.jpg", value: false },
                { image: "images/f20_dfh_hc.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "害怕",
            comment: "代表驚訝，而不是害怕。害怕和驚訝常常被混淆。在表現害怕的照片中，你會看到上眼瞼上揚，下眼瞼緊繃，眉毛也皺在一起。而驚訝的表情是上眼瞼上揚（但下眼瞼沒有緊繃），眉毛也上揚（但沒有皺在一起）。",
            options: [
                { image: "images/f13_dfh_fc.jpg", value: false },
                { image: "images/f16_dfh_pc.jpg", value: true },
                { image: "images/f18_dfh_fc.jpg", value: false },
                { image: "images/f20_dfh_fc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "害怕",
            comment: "是生氣，不是害怕。害怕的眉毛上揚，嘴唇緊繃張開，其他表現害怕的面部動作還有上眼瞼上揚，下眼瞼緊繃，眉毛皺在一起。而生氣的面部動作組合則包括眉毛下垂，嘴唇上揚，和眼神睜大怒視。",
            options: [
                { image: "images/f13_dfh_fc.jpg", value: false },
                { image: "images/f18_dfh_ac.jpg", value: true },
                { image: "images/f16_dfh_fc.jpg", value: false },
                { image: "images/f20_dfh_fc.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "害怕",
            comment: "是輕蔑，不是害怕。害怕的眉毛上揚，嘴唇緊繃張開，其他表現害怕的面部動作，還包括上眼瞼上揚，下眼瞼緊繃，眉毛也皺在一起。單側上揚的嘴角動作表達的是輕蔑，它是唯一一種只用半側臉表達的情緒，意味著表情不對稱。",
            options: [
                { image: "images/f13_dfh_fc.jpg", value: false },
                { image: "images/f20_dfh_crc.jpg", value: true },
                { image: "images/f18_dfh_fc.jpg", value: false },
                { image: "images/f16_dfh_fc.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "傷心",
            comment: "代表害怕，而不是傷心。傷心和害怕通常都體現在眼神和眉毛的表情上。害怕的表情通常是上眼瞼上揚，眉毛也揚了起來。其他照片則展現了各種悲傷的表情，包括上眼瞼下垂，眉毛內角緊縮。",
            options: [
                { image: "images/f13_dfh_sc.jpg", value: false },
                { image: "images/f18_dfh_fc.jpg", value: true },
                { image: "images/f20_dfh_sc.jpg", value: false },
                { image: "images/f16_dfh_sc.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "傷心",
            comment: "是噁心，不是傷心。傷心有一個顯著的特徵是眉毛內角上揚，這些肌肉不容易自主控制，所以很難偽裝，傷心的其他表情還包括上眼瞼下垂，嘴角向下拉。而噁心最明顯的特徵就是皺鼻子。",
            options: [
                { image: "images/f13_dfh_sc.jpg", value: false },
                { image: "images/f18_dfh_dc.jpg", value: true },
                { image: "images/f20_dfh_sc.jpg", value: false },
                { image: "images/f16_dfh_sc.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "傷心",
            comment: "是生氣，不是傷心。傷心最明顯的特徵是眉毛內角上揚，這些肌肉不容易自主控制，所以很難偽裝，傷心的其他表情還包括上眼瞼下垂，嘴角向下拉。生氣的面部動作包括眉毛下垂，嘴唇上揚緊閉、眼神睜大怒視。",
            options: [
                { image: "images/f13_dfh_sc.jpg", value: false },
                { image: "images/f20_dfh_ac.jpg", value: true },
                { image: "images/f18_dfh_sc.jpg", value: false },
                { image: "images/f16_dfh_sc.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "驚訝",
            comment: "代表害怕，而不是驚訝。驚訝和害怕的表情容易混淆。兩者的眉毛都會上揚，但害怕的眉毛較直較水平，而驚訝的眉毛則上揚彎曲。害怕表情的嘴唇緊繃張開，驚訝表情的嘴唇會張的更開，更鬆弛，下顎更放鬆。",
            options: [
                { image: "images/f13_dfh_pc.jpg", value: false },
                { image: "images/f20_dfh_fc.jpg", value: true },
                { image: "images/f18_dfh_pc.jpg", value: false },
                { image: "images/f16_dfh_pc.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "驚訝",
            comment: "是開心，不是驚訝。驚訝的表情眉毛及上眼瞼都上揚，下巴往下放鬆或下垂(下巴往下掉)。而真正的開心，最明顯的特徵就是眼角有魚尾紋，開心的表情臉頰會上揚，嘴唇往後拉而露齒微笑。",
            options: [
                { image: "images/f13_dfh_pc.jpg", value: false },
                { image: "images/f16_dfh_hc.jpg", value: true },
                { image: "images/f18_dfh_pc.jpg", value: false },
                { image: "images/f20_dfh_pc.jpg", value: false }
            ],
            gender: "F"
        },
        {
            title: "驚訝",
            comment: "是傷心，不是驚訝。驚訝的表情是上眼瞼上揚，眉毛也上揚，而下巴往下掉。傷心的表情最明顯的特徵就是眉毛內角上揚，其他表情還包括上眼瞼下垂，嘴角向下拉。",
            options: [
                { image: "images/f20_dfh_pc.jpg", value: false },
                { image: "images/f13_dfh_sc.jpg", value: true },
                { image: "images/f18_dfh_pc.jpg", value: false },
                { image: "images/f16_dfh_pc.jpg", value: false }
            ],
            gender: "F"
        },
         {
            title: "生氣",
            comment: "代表噁心，而不是生氣。生氣很容易與噁心混淆，甚至被誤認為噁心，因為這兩個表情通常都包括眉毛下垂和嘴唇上揚。然而，照片中最明顯的代表噁心的特徵是鼻子皺了起來，這個面部動作不會出現在生氣的表情。",
            options: [
                { image: "images/m12_dfh_ac.jpg", value: false },
                { image: "images/m08_dfh_dc.jpg", value: true },
                { image: "images/m13_dfh_ac.jpg", value: false },
                { image: "images/m19_dfh_ac.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "生氣",
            comment: "代表害怕，不是生氣。生氣的面部動作包括眉毛下垂，嘴唇上揚緊閉和眼神睜大瞪視。而害怕的眉毛則明顯上揚，嘴唇緊繃張開；害怕表情的面部動作還包括上眼瞼上揚，下眼瞼緊繃，以及眉毛皺在一起。",
            options: [
                { image: "images/m12_dfh_ac.jpg", value: false },
                { image: "images/m08_dfh_fc.jpg", value: true },
                { image: "images/m13_dfh_ac.jpg", value: false },
                { image: "images/m19_dfh_ac.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "生氣",
            comment: "是傷心，不是生氣。生氣的面部動作包括眉毛下垂，嘴唇上揚緊閉、和眼神睜大怒視。而傷心有一個顯著的特徵是眉毛內角上揚，這些肌肉不容易自主控制，所以很難偽裝，傷心的其他表情還包括上眼瞼下垂，嘴角向下拉。",
            options: [
                { image: "images/m08_dfh_ac.jpg", value: false },
                { image: "images/m13_dfh_sc.jpg", value: true },
                { image: "images/m12_dfh_ac.jpg", value: false },
                { image: "images/m19_dfh_ac.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "輕蔑",
            comment: "代表噁心，而非輕蔑。三張輕蔑的照片中，嘴角的緊繃很明顯，而那張噁心照片中的鼻子有明顯的皺褶，當你看到鼻翼翹起，鼻翼兩側和鼻樑上出現了皺紋，這些都是噁心表情的顯著特徵。",
            options: [
                { image: "images/m08_dfh_clc.jpg", value: false },
                { image: "images/m12_dfh_dc.jpg", value: true },
                { image: "images/m13_dfh_clc.jpg", value: false },
                { image: "images/m19_dfh_clc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "輕蔑",
            comment: "是驚訝，不是輕蔑。單側上揚的嘴角動作表達的是輕蔑，它是唯一一種只用到半邊臉表達的情緒，意味著表情不對稱。而驚訝的表情是，上眼瞼上揚，眉毛也上揚，下巴往下掉。",
            options: [
                { image: "images/m08_dfh_clc.jpg", value: false },
                { image: "images/m19_dfh_pc.jpg", value: true },
                { image: "images/m12_dfh_clc.jpg", value: false },
                { image: "images/m13_dfh_clc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "輕蔑",
            comment: "是生氣，不是輕蔑。單側上揚的嘴角動作表達的是輕蔑，它是唯一一種只用半側臉表達的情緒，意味著表情不對稱。生氣的面部動作包括眉毛下垂，嘴唇上揚緊閉和眼神睜大怒視。",
            options: [
                { image: "images/m12_dfh_clc.jpg", value: false },
                { image: "images/m08_dfh_ac.jpg", value: true },
                { image: "images/m13_dfh_clc.jpg", value: false },
                { image: "images/m19_dfh_clc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "噁心",
            comment: "代表生氣，而不是噁心。生氣的照片顯示三種通常與生氣相關的動作組合—眉毛下垂、眼瞼緊繃和眼神睜大怒視。而皺鼻子是噁心表情最容易辨別的顯著特徵。",
            options: [
                { image: "images/m08_dfh_dc.jpg", value: false },
                { image: "images/m12_dfh_ac.jpg", value: true },
                { image: "images/m13_dfh_dc.jpg", value: false },
                { image: "images/m19_dfh_dc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "噁心",
            comment: "是害怕，不是噁心。噁心最容易辨識和明顯的特徵就是皺鼻子。而害怕的表情則是眉毛上揚，眉毛皺在一起，上眼瞼上揚，下眼瞼緊繃，嘴唇緊繃張開。",
            options: [
                { image: "images/m08_dfh_dc.jpg", value: false },
                { image: "images/m12_dfh_fc.jpg", value: true },
                { image: "images/m13_dfh_dc.jpg", value: false },
                { image: "images/m19_dfh_dc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "噁心",
            comment: "是傷心，不是噁心。噁心最容易辨識的特徵就是皺鼻子。而傷心最明顯的特徵是眉毛內角上揚，這些肌肉不容易自主控制，所以很難偽裝，傷心的其他表情還包括上眼瞼下垂，嘴角向下拉。",
            options: [
                { image: "images/m08_dfh_dc.jpg", value: false },
                { image: "images/m19_dfh_sc.jpg", value: true },
                { image: "images/m12_dfh_dc.jpg", value: false },
                { image: "images/m13_dfh_dc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "開心",
            comment: "代表輕蔑，而不是開心。單側上揚的嘴角動作，表達的是輕蔑而非開心。輕蔑是基本表情中唯一一個透過單側(僅一側)上揚嘴角來準確表達的面部表情。",
            options: [
                { image: "images/m08_dfh_hc.jpg", value: false },
                { image: "images/m13_dfh_clc.jpg", value: true },
                { image: "images/m12_dfh_hc.jpg", value: false },
                { image: "images/m19_dfh_hc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "開心",
            comment: "不帶有表情，而非開心。真正開心的微笑，最明顯的特徵就是眼角有魚尾紋，開心時臉頰會上揚，嘴唇往後拉而露齒微笑。",
            options: [
                { image: "images/m12_dfh_hc.jpg", value: false },
                { image: "images/m08_dfh_nc.jpg", value: true },
                { image: "images/m13_dfh_hc.jpg", value: false },
                { image: "images/m19_dfh_hc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "開心",
            comment: "是驚訝，不是開心。真正開心的微笑，最明顯的特徵就是眼角有魚尾紋，開心的臉頰會上揚，嘴唇往後拉而露齒微笑。而驚訝的表情是，上眼瞼上揚，眉毛也上揚，下巴往下掉。",
            options: [
                { image: "images/m12_dfh_hc.jpg", value: false },
                { image: "images/m08_dfh_pc.jpg", value: true },
                { image: "images/m13_dfh_hc.jpg", value: false },
                { image: "images/m19_dfh_hc.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "害怕",
            comment: "代表驚訝，而不是害怕。害怕和驚訝常常被混淆。在表現害怕的照片中，你會看到上眼瞼上揚，下眼瞼緊繃，眉毛也皺在一起。而驚訝的表情是上眼瞼上揚（但下眼瞼沒有緊繃），眉毛也上揚（但沒有皺在一起）。",
            options: [
                { image: "images/m08_dfh_fc.jpg", value: false },
                { image: "images/m12_dfh_pc.jpg", value: true },
                { image: "images/m13_dfh_fc.jpg", value: false },
                { image: "images/m19_dfh_fc.jpg", value: false }
            ],
            gender: "M"
        },
         {
            title: "害怕",
            comment: "是生氣，不是害怕。害怕的眉毛上揚，嘴唇緊繃張開，其他表現害怕的面部動作還有上眼瞼上揚，下眼瞼緊繃，眉毛皺在一起。而生氣的面部動作組合則包括眉毛下垂，嘴唇上揚，和眼神睜大怒視。",
            options: [
                { image: "images/m08_dfh_fc.jpg", value: false },
                { image: "images/m13_dfh_ac.jpg", value: true },
                { image: "images/m12_dfh_fc.jpg", value: false },
                { image: "images/m19_dfh_fc.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "害怕",
            comment: "是輕蔑，不是害怕。害怕的眉毛上揚，嘴唇緊繃張開，其他表現害怕的面部動作，還包括上眼瞼上揚，下眼瞼緊繃，眉毛也皺在一起。單側上揚的嘴角動作表達的是輕蔑，它是唯一一種只用半側臉表達的情緒，意味著表情不對稱。",
            options: [
                { image: "images/m08_dfh_fc.jpg", value: false },
                { image: "images/m19_dfh_clc.jpg", value: true },
                { image: "images/m12_dfh_fc.jpg", value: false },
                { image: "images/m13_dfh_fc.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "傷心",
            comment: "代表害怕，而不是傷心。傷心和害怕通常都體現在眼神和眉毛的表情上。害怕的表情通常是上眼瞼上揚，眉毛也揚了起來。其他照片則展現了各種悲傷的表情，包括上眼瞼下垂，眉毛內角緊縮。",
            options: [
                { image: "images/m08_dfh_sc.jpg", value: false },
                { image: "images/m13_dfh_fc.jpg", value: true },
                { image: "images/m12_dfh_sc.jpg", value: false },
                { image: "images/m19_dfh_sc.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "傷心",
            comment: "是噁心，不是傷心。傷心有一個顯著的特徵是眉毛內角上揚，這些肌肉不容易自主控制，所以很難偽裝，傷心的其他表情還包括上眼瞼下垂，嘴角向下拉。而噁心最明顯的特徵就是皺鼻子。",
            options: [
                { image: "images/m08_dfh_sc.jpg", value: false },
                { image: "images/m13_dfh_dc.jpg", value: true },
                { image: "images/m12_dfh_sc.jpg", value: false },
                { image: "images/m19_dfh_sc.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "傷心",
            comment: "是生氣，不是傷心。傷心最明顯的特徵是眉毛內角上揚，這些肌肉不容易自主控制，所以很難偽裝，傷心的其他表情還包括上眼瞼下垂，嘴角向下拉。生氣的面部動作包括眉毛下垂，嘴唇上揚緊閉、眼神睜大怒視。",
            options: [
                { image: "images/m08_dfh_sc.jpg", value: false },
                { image: "images/m19_dfh_ac.jpg", value: true },
                { image: "images/m12_dfh_sc.jpg", value: false },
                { image: "images/m13_dfh_sc.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "驚訝",
            comment: "代表害怕，而不是驚訝。驚訝和害怕的表情容易混淆。兩者的眉毛都會上揚，但害怕的眉毛較直較水平，而驚訝的眉毛則上揚彎曲。害怕表情的嘴唇緊繃張開，驚訝表情的嘴唇會張的更開，更鬆弛，下顎更放鬆。",
            options: [
                { image: "images/m08_dfh_pc.jpg", value: false },
                { image: "images/m19_dfh_fc.jpg", value: true },
                { image: "images/m12_dfh_pc.jpg", value: false },
                { image: "images/m13_dfh_pc.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "驚訝",
            comment: "是開心，不是驚訝。驚訝的表情眉毛及上眼瞼都上揚，下巴往下放鬆或下垂(下巴往下掉)。而真正的開心，最明顯的特徵就是眼角有魚尾紋，開心的表情臉頰會上揚，嘴唇往後拉而露齒微笑。",
            options: [
                { image: "images/m08_dfh_pc.jpg", value: false },
                { image: "images/m12_dfh_hc.jpg", value: true },
                { image: "images/m13_dfh_pc.jpg", value: false },
                { image: "images/m19_dfh_pc.jpg", value: false }
            ],
            gender: "M"
        },
        {
            title: "驚訝",
            comment: "是傷心，不是驚訝。驚訝的表情是上眼瞼上揚，眉毛也上揚，而下巴往下掉。傷心的表情最明顯的特徵就是眉毛內角上揚，其他表情還包括上眼瞼下垂，嘴角向下拉。",
            options: [
                { image: "images/m12_dfh_pc.jpg", value: false },
                { image: "images/m08_dfh_sc.jpg", value: true },
                { image: "images/m13_dfh_pc.jpg", value: false },
                { image: "images/m19_dfh_pc.jpg", value: false }
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
