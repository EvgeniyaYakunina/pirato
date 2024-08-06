import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarkdownLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#markdown-logo-fill_svg__a)"><path fill="#000" d="M14.5 3h-13a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M8 9.5a.5.5 0 1 1-1 0V7.707L5.854 8.854a.5.5 0 0 1-.708 0L4 7.707V9.5a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .854-.354L5.5 7.793l1.646-1.647A.5.5 0 0 1 8 6.5zm4.854-1.146-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708l.646.647V6.5a.5.5 0 0 1 1 0v1.793l.646-.647a.501.501 0 0 1 .708.708" /></g><defs><clipPath id="markdown-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgMarkdownLogoFill);
const Memo = memo(ForwardRef);
export default Memo;