// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const links = {
  html: [
    "https://www.w3schools.com/html/default.asp",
    "https://www.w3schools.com/html/html_intro.asp",
    "https://www.w3schools.com/html/html_basic.asp",
    "https://www.w3schools.com/html/html_elements.asp",
    "https://www.w3schools.com/html/html_attributes.asp",
    "https://www.w3schools.com/html/html_headings.asp",
    "https://www.w3schools.com/html/html_paragraphs.asp",
    "https://www.w3schools.com/html/html_styles.asp",
    "https://www.w3schools.com/html/html_formatting.asp",
    "https://www.w3schools.com/html/html_quotation_elements.asp",
    "https://www.w3schools.com/html/html_comments.asp",
    "https://www.w3schools.com/html/html_colors.asp",
    "https://www.w3schools.com/html/html_colors_rgb.asp",
    "https://www.w3schools.com/html/html_colors_hex.asp",
    "https://www.w3schools.com/html/html_css.asp",
    "https://www.w3schools.com/html/html_links.asp",
    "https://www.w3schools.com/html/html_images.asp",
    "https://www.w3schools.com/html/html_page_title.asp",
    "https://www.w3schools.com/html/html_classes.asp",
    "https://www.w3schools.com/html/html_id.asp",
  ],
  css: [
    "https://www.w3schools.com/css/default.asp",
    "https://www.w3schools.com/css/css_intro.asp",
    "https://www.w3schools.com/css/css_syntax.asp",
    "https://www.w3schools.com/css/css_selectors.asp",
    "https://www.w3schools.com/css/css_howto.asp",
    "https://www.w3schools.com/css/css_comments.asp",
    "https://www.w3schools.com/css/css_background.asp",
    "https://www.w3schools.com/css/css_border.asp",
    "https://www.w3schools.com/css/css_margin.asp",
    "https://www.w3schools.com/css/css_padding.asp",
    "https://www.w3schools.com/css/css_dimension.asp",
    "https://www.w3schools.com/css/css_font.asp",
    "https://www.w3schools.com/css/css_max-width.asp",
  ],
  js: [
    "https://www.w3schools.com/js/default.asp",
    "https://www.w3schools.com/js/js_intro.asp",
    "https://www.w3schools.com/js/js_whereto.asp",
    "https://www.w3schools.com/js/js_output.asp",
    "https://www.w3schools.com/js/js_statements.asp",
    "https://www.w3schools.com/js/js_syntax.asp",
    "https://www.w3schools.com/js/js_comments.asp",
    "https://www.w3schools.com/js/js_variables.asp",
    "https://www.w3schools.com/js/js_let.asp",
    "https://www.w3schools.com/js/js_const.asp",
    "https://www.w3schools.com/js/js_operators.asp",
    "https://www.w3schools.com/js/js_arithmetic.asp",
    "https://www.w3schools.com/js/js_functions.asp",
    "https://www.w3schools.com/js/js_events.asp",
    "https://www.w3schools.com/js/js_strings.asp",
    "https://www.w3schools.com/js/js_string_methods.asp",
    "https://www.w3schools.com/js/js_numbers.asp",
    "https://www.w3schools.com/js/js_comparisons.asp",
    "https://www.w3schools.com/js/js_if_else.asp",
    "https://www.w3schools.com/js/js_loop_for.asp",
    "https://www.w3schools.com/js/js_regexp.asp",
  ],
};

type Data = {
  // name: string;
  reason?: string;
  links?: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { lang } = req.query;
  if (!lang)
    return res.status(400).json({ reason: "missing lang query param" });
  if (typeof lang === "object" || !["html", "css", "js"].includes(lang))
    return res.status(400).json({ reason: "invalid lang query param" });

  res
    .status(200)
    .json({
      links: links[lang as "html" | "css" | "js"],
    });

  // console.log(req.query);
  // res.status(200).json({ name: "John Doe" });
}
