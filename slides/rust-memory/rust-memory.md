---
theme: seriph
class: text-center
title: Rust Memory in Concurrency
info: |
  Talks - Animesh Sahu
drawings:
  persist: false
transition: slide-left
mdc: true
hideInToc: true
---

<style>h1 { color: #146B8C !important; }</style>

# Rust Memory in Concurrency

A deep dive!

---
hideInToc: true
transition: fade-out
---

# Little bit about myself


<v-clicks depth="2">

- This is my first talk in public.
- I'm using rust for over 3 years now.
  - Not on work or studies, but as a hobbyist.
- Rust & Ruby = ❤
  - (and Kotlin)
- I'm an occassional blogger, haven't written on Rust yet, but have a few drafts.
  - Luckily some of blogs are backlinked (e.g. DistroWatch) & covered in videos as well.

</v-clicks>

---
hideInToc: true
transition: slide-up
---

# Table of Contents

<Toc />

---

# Basics

## The Three Semantics
<br>

````md magic-move {lines: true}
```rs {*|1}
let a = b;          // Move
let a = b;          // Copy (where b: Copy)
let a = b.clone();  // Clone (where b: Clone)
```

```rs {*|2|4-5|*}
let b = String::from("Hello World!");
let a = b;          // Move

// b invalidated
println!("{} {}", a, b);  // error[E0382]: borrow of moved value: `b`
```

```rs {*|2}
let a = b;          // Move
let a = b;          // Copy (where b: Copy)
let a = b.clone();  // Clone (where b: Clone)
```

```rs
let b = 42;
let a = b;          // Copy (where b: Copy)

println!("{} {}", a, b);    // 42 42
```

```rs {*|3}
let a = b;          // Move
let a = b;          // Copy (where b: Copy)
let a = b.clone();  // Clone (where b: Clone)
```

```rs
let b = String::from("Hello World!");
let a = b.clone();  // Clone (where b: Clone)

println!("{} {}", a, b);    // Hello World! Hello World!
```

```rs
let a = b;          // Move
let a = b;          // Copy (where b: Copy)
let a = b.clone();  // Clone (where b: Clone)
```

```rs {1}
let a = b;          // Move                     <-- b is not usable
let a = b;          // Copy (where b: Copy)
let a = b.clone();  // Clone (where b: Clone)
```

```rs {2-3|*}
let a = b;          // Move                     <-- b is not usable
let a = b;          // Copy (where b: Copy)     <-- b is usable
let a = b.clone();  // Clone (where b: Clone)
```

```rs {*|*|1-2|3}
let a = b;          // Move                     <-- b is not usable
let a = b;          // Copy (where b: Copy)     <-- b is usable
let a = b.clone();  // Clone (where b: Clone)
```
````

<v-click at="16">

Q: Among these operations which op performs a `memcpy`?

</v-click>

<v-click at="17">

A: All 3 of them!

> Copies are moves. Moves are copies. Only the type checker knows the difference.

</v-click>




---

# Smart Pointers

---

# Memory Ordering

---
