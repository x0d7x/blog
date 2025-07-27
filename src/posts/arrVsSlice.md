---
title: "array vs slice في Go — الفرق الجوهري وأفضل استخدام"
author: "d7man"
pubDate: 2025-07-27
slug: "array-vs-slice"
cover: "../assets/arrvsskice.png"
desc: "تعرف على الفروقات الأساسية بين array و slice في لغة Go من حيث الأداء، المرونة، وطريقة الاستخدام، مع أمثلة توضيحية ونصائح عملية لاختيار الأنسب."
tags: ["array", "golang", "coding"]
social:
  Twitter: "https://twitter.com/x0d7x"
  Github: "https://github.com/x0d7x"
  Youtube: "https://www.youtube.com/@x0d7x"
  Tiktok: "https://www.tiktok.com/@x0d7x"
---

# 🧩 الفرق بين `array` و `slice` في Go

في لغة Go، عندك نوعين رئيسيين لتخزين القوائم: **`array`** و **`slice`**.  
يبدون متشابهين، لكن الفرق بينهم كبير من حيث **المرونة، الأداء، وطريقة الاستخدام**.

---

## 📦 أولًا: `array`

- **طول ثابت** يتم تحديده وقت التعريف.
- يتم **نسخه بالكامل** عند تمريره للدوال.
- يعطي **أداء عالي**، لكنه **غير مرن**.

### 🔸 مثال

```go
var a [3]int // يجب تحديد عدد العناصر
a[0] = 1
fmt.Println(a) // [1 0 0]
```

🌊 ثانيًا: slice
طول ديناميكي يمكن تغييره.

مبني على array داخلي.

يُمرر كمرجع، وغالبية الشيفرات في Go تعتمد عليه.

🔹 مثال:

```go
package main

import "fmt"

func main() {
    s := []int{1, 2, 3}          // لا حاجة لتحديد الطول
    fmt.Println(s)              // [1 2 3]

    s = append(s, 4)            // إضافة عنصر جديد
    fmt.Println(s)              // [1 2 3 4]
}
```

🎯 الخلاصة:
array ممتاز للحالات الثابتة والأداء، بينما slice هو الخيار العملي لمعظم التطبيقات بسبب مرونته.
