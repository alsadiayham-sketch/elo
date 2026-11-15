// Seed data for ELO Premium
// Run via: window.seedFirestoreData(true) while logged into the admin.

window.seedFirestoreData = function (clearExisting) {
    var db = window.db;
    var imageBase = 'https://images.unsplash.com/';
    var products = [
        ['ELO Shadow Oversized Tee', 'ELO Originals', 'تيشيرتات', 149, 'photo-1521572163474-6864f9cf17ab', 'bestseller', 'تيشيرت واسع بقصة يومية وخامة قطنية ناعمة.'],
        ['ELO Core Boxy Tee', 'ELO Essentials', 'تيشيرتات', 139, 'photo-1503341504253-dff4815485f1', 'special', 'قصة بوكسية عصرية بتفاصيل نظيفة تناسب كل إطلالة.'],
        ['ELO Signature Hoodie', 'ELO Originals', 'هوديز', 249, 'photo-1556821840-3a63f95609a7', 'bestseller', 'هودي مريح بتصميم ELO المميز للأيام الباردة.'],
        ['ELO Studio Zip Hoodie', 'ELO Studio', 'هوديز', 279, 'photo-1578681994506-b8f463449011', 'special', 'هودي بسحاب وقصة مرتبة للّوك الحضري.'],
        ['ELO Relaxed Cargo', 'ELO Originals', 'بناطيل', 259, 'photo-1515886657613-9f3515b0c78f', 'bestseller', 'بنطال كارغو بقصة واسعة وجيوب عملية.'],
        ['ELO Straight Denim', 'ELO Essentials', 'بناطيل', 239, 'photo-1542272604-787c3835535d', 'normal', 'جينز بقصة مستقيمة ودرجة لون سهلة التنسيق.'],
        ['ELO Wide Leg Trousers', 'ELO Studio', 'بناطيل', 229, 'photo-1594633312681-425c7b97ccd1', 'special', 'بنطال واسع بانسيابية أنيقة ولمسة عصرية.'],
        ['ELO Varsity Jacket', 'ELO Originals', 'جاكيتات', 329, 'photo-1551028719-00167b16eac5', 'bestseller', 'جاكيت مستوحى من الڤارسِتي بتفاصيل جريئة.'],
        ['ELO Utility Overshirt', 'ELO Studio', 'جاكيتات', 289, 'photo-1591047139829-d91aecb6caea', 'normal', 'أوفرشيرت خفيف يكمّل إطلالتك في كل موسم.'],
        ['ELO Cropped Puffer', 'ELO Originals', 'جاكيتات', 349, 'photo-1548883354-7622d03aca27', 'special', 'جاكيت مبطن بقصة قصيرة وحضور واضح.'],
        ['ELO Ribbed Long Sleeve', 'ELO Essentials', 'توبات', 119, 'photo-1564257577054-0d8c6b7f1f7f', 'normal', 'قطعة أساسية مضلعة للطبقات والإطلالات اليومية.'],
        ['ELO Contrast Baby Tee', 'ELO Studio', 'توبات', 129, 'photo-1485968579580-b6d095142e6e', 'special', 'تيشيرت بقصة قصيرة وتفاصيل كونتراست ناعمة.'],
        ['ELO Everyday Sweatpants', 'ELO Essentials', 'بناطيل', 199, 'photo-1506629905607-d9c297d53a63', 'bestseller', 'بنطال سويت مريح للّوك الهادئ واليومي.'],
        ['ELO Track Pants', 'ELO Originals', 'بناطيل', 219, 'photo-1552902865-b72c031ac5ea', 'normal', 'بنطال رياضي بخط جانبي يعطي الإطلالة طاقة.'],
        ['ELO Layering Tank', 'ELO Essentials', 'توبات', 89, 'photo-1551488831-00ddcb6c6bd3', 'normal', 'توب خفيف وأساسي للارتداء تحت القطع أو وحده.'],
        ['ELO Heavyweight Crewneck', 'ELO Originals', 'سويتشيرتات', 229, 'photo-1576566588028-4147f3842f27', 'bestseller', 'سويتشيرت ثقيل بملمس فاخر وقصة مريحة.'],
        ['ELO Minimal Crewneck', 'ELO Studio', 'سويتشيرتات', 209, 'photo-1571945153237-4929e783af4a', 'normal', 'سويتشيرت نظيف بتفصيل بسيط وسهل التنسيق.'],
        ['ELO Mesh Layer Top', 'ELO Studio', 'توبات', 139, 'photo-1566206091558-7f218b696731', 'special', 'طبقة شبكية خفيفة لإطلالة مختلفة وجريئة.'],
        ['ELO Monogram Cap', 'ELO Originals', 'إكسسوارات', 99, 'photo-1521369909029-2afed882baee', 'bestseller', 'كاب مطرز بشعار ELO لإكمال اللوك.'],
        ['ELO Canvas Tote', 'ELO Essentials', 'إكسسوارات', 109, 'photo-1544816155-12df9643f363', 'normal', 'شنطة كانفاس عملية بتصميم يومي أنيق.'],
        ['ELO Ribbed Beanie', 'ELO Originals', 'إكسسوارات', 79, 'photo-1575428652377-a2d80e2277fc', 'normal', 'قبعة ريب دافئة بلمسة ستريت وير.'],
        ['ELO Essential Socks', 'ELO Essentials', 'إكسسوارات', 49, 'photo-1586350977771-b3b0abd50c82', 'normal', 'جوارب قطنية مريحة بشعار ELO.']
    ].map(function (item, index) {
        return {
            name: item[0],
            brand: item[1],
            category: item[2],
            sizes: [
                { size: 'S', unit: 'مقاس', price: item[3] },
                { size: 'M', unit: 'مقاس', price: item[3] },
                { size: 'L', unit: 'مقاس', price: item[3] },
                { size: 'XL', unit: 'مقاس', price: item[3] }
            ],
            image: imageBase + item[4] + '?w=600&h=750&fit=crop',
            description: item[6],
            status: item[5],
            inStock: true,
            order: index + 1
        };
    });

    var settings = {
        whatsappNumber: '972569236758',
        heroSubtitle: 'ملابس أصلية بتصميم ELO',
        aboutText: 'ELO هي علامة ملابس مستقلة نصمم قطعها من الصفر لنمنحك ستايلاً واضحاً وشخصية لا تشبه أحداً.\nنختار الخامات بعناية ونبني كل مجموعة حول فكرة، لتلبسي القطعة بثقة كل يوم.',
        instagramLink: 'https://www.instagram.com/elo.premium11/',
        tiktokLink: ''
    };

    var productsRef = db.collection('products');
    var settingsRef = db.collection('settings').doc('config');
    function writeProducts() {
        var batch = db.batch();
        products.forEach(function (product, index) {
            product.id = index + 1;
            batch.set(productsRef.doc(String(index + 1)), product);
        });
        batch.set(settingsRef, settings);
        return batch.commit();
    }

    if (!clearExisting) {
        return writeProducts().then(function () {
            console.log('Seeded ' + products.length + ' products successfully!');
        });
    }

    return productsRef.get().then(function (snapshot) {
        var deleteBatch = db.batch();
        snapshot.forEach(function (doc) { deleteBatch.delete(doc.ref); });
        return deleteBatch.commit();
    }).then(writeProducts).then(function () {
        console.log('Seeded ' + products.length + ' products successfully!');
    });
};
