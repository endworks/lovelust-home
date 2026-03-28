export function parseFaq(
  markdown: string,
  options: { collapseNewlines?: boolean } = {},
): { question: string; answer: string }[] {
  return markdown
    .split(/^## /m)
    .filter(Boolean)
    .map((block) => {
      const i = block.indexOf("\n");
      const question = block.slice(0, i).trim();
      let answer = block.slice(i).trim();
      if (options.collapseNewlines) answer = answer.replace(/\n+/g, " ");
      return { question, answer };
    })
    .filter(({ question, answer }) => question && answer);
}
