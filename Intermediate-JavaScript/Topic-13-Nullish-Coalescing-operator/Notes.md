Introduction 
 Nullish Coalescing Operator (??) — a powerful little tool to handle default values, but only when the left-hand side is null or undefined (not other falsy values like 0, false, "").

🔍 What is ???
const name = userInput ?? "Guest";

✅ It assigns "Guest" only if userInput is null or undefined.

🔥 It's better than || when you want to preserve values like 0, false, or "".

🤯 Key Difference: || vs ??
| Expression | Value of left | Result with || | Result with ?? |
|--------------------|----------------|------------------|------------------|
| left || "Default" | 0 | "Default" | 0 |
| left || "Default" | "" | "Default" | "" |
| left || "Default" | false | "Default" | false |
| left || "Default" | null | "Default" | "Default" |
| left || "Default" | undefined | "Default" | "Default" |

✅ When to use it?
When you want a safe fallback, but don’t want to override falsy values like 0, false, "".







































