
---

## 🔥 Think of it like this:

`useMemo` is like a **cache for one result at a time**.

It says:

> “If my inputs (dependencies) didn’t change, I will reuse the previous result.
> If they changed, I will recalculate and replace the old one.”

---

## 📌 Example

```tsx
const result = useMemo(() => {
  return count * 2;
}, [count]);
```

### What happens:

| count value | useMemo result | stored?            |
| ----------- | -------------- | ------------------ |
| 1           | 2              | yes                |
| 2           | 4              | yes (replaces old) |
| 3           | 6              | yes (replaces old) |

👉 Only **one value exists at a time**

---

## ❌ What it does NOT do

* ❌ It does NOT keep history (no list of old values)
* ❌ It does NOT store multiple results
* ❌ It is NOT a database or state history

---

## 🧠 Best mental model

### `useMemo = smart calculator memory`

It remembers:

> “What was the result for THIS input?”

If input changes → new result replaces old one.

---

## ⚡ Important difference from `useState`

| useState                            | useMemo                   |
| ----------------------------------- | ------------------------- |
| stores data                         | stores computed result    |
| can hold multiple updates over time | only current cached value |
| triggers re-render                  | avoids recalculation      |

---

## 💡 Simple analogy

* `useState` = notebook where you write many notes 📒
* `useMemo` = calculator memory showing only latest answer 🧮

---
