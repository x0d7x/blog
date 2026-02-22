---
title: "Rift — مدير نوافذ Tiling لنظام macOS"
author: "d7man"
pubDate: 2026-03-11
slug: "rift-WM"
cover: "../assets/riftwm.png"
desc: "تعرف على Rift، مدير نوافذ tiling حديث لنظام macOS"
tags: ["macOS", "tiling", "window manager", "rift"]
social:
  Twitter: "https://twitter.com/x0d7x"
  Github: "https://github.com/x0d7x"
  Youtube: "https://www.youtube.com/@x0d7x"
  Tiktok: "https://www.tiktok.com/@x0d7x"
---

# Rift — مدير نوافذ Tiling لنظام macOS

إدارة النوافذ في macOS تعتمد افتراضيًا على النوافذ العائمة، حيث تقوم بتحريك النوافذ وتغيير حجمها يدويًا. هذه الطريقة مناسبة للاستخدام العادي، لكنها تصبح مزعجة عندما تعمل على عدة تطبيقات في نفس الوقت.

هنا يأتي **Rift**.

**Rift** هو مدير نوافذ بنمط **tiling window manager** لنظام macOS يقوم بتنظيم النوافذ تلقائيًا داخل الشاشة، بحيث يحصل كل تطبيق على مساحة محددة دون الحاجة لترتيب النوافذ يدويًا.

المشروع مفتوح المصدر:  
https://github.com/acsandmann/rift

---

## فكرة Rift

بدل أن تتداخل النوافذ فوق بعضها، يقوم Rift بتقسيم الشاشة وترتيب التطبيقات تلقائيًا.

مثال بسيط:
+———–+———–+
| Editor | Terminal |
+———–+———–+
| Browser |
+———————–+
عند فتح نافذة جديدة يعاد ترتيب النوافذ تلقائيًا.

هذا الأسلوب معروف لدى مستخدمي لينكس مع مدراء نوافذ مثل  
i3
Sway

---

## أهم المميزات

- Master Stack Layout
- BSP (Binary Space Partitioning)
- **Scrolling Layout** مثل Niri

- دعم **Workspaces** لتنظيم التطبيقات.
- واجهة تشبه **Mission Control** للتنقل بين المساحات.
- إمكانية ترتيب النوافذ بالسحب أو باستخدام الكيبورد.
- دعم **gestures** في التراكباد.
- نظام **rules** للتحكم في سلوك النوافذ.
- دعم الشاشات المتعددة.

---

## مناسب لمن؟

Rift مناسب خصوصًا لـ:

- المطورين
- مستخدمي التيرمنال
- القادمين من بيئة لينكس
- من يفضل العمل باستخدام الكيبورد

ويعمل بشكل ممتاز مع أدوات مثل  
kitty
Neovim

---

## الخلاصة

**Rift** يقدم تجربة **tiling window manager حديثة لنظام macOS** تساعد على تنظيم النوافذ وزيادة الإنتاجية، خصوصًا لمن يعمل على عدة تطبيقات في نفس الوقت.

المشروع متوفر على GitHub:

https://github.com/acsandmann/rift
