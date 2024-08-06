import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileHtmlFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-html-fill_svg__a)"><path fill="#000" d="M2.75 8h10.5a.25.25 0 0 0 .25-.25V5.5a.5.5 0 0 0-.146-.354l-3.5-3.5A.5.5 0 0 0 9.5 1.5h-6a1 1 0 0 0-1 1v5.25a.25.25 0 0 0 .25.25M9.5 2.75l2.75 2.75H9.5zM4.25 10v3a.5.5 0 0 1-1 0v-1H2v1a.5.5 0 0 1-1 0v-3a.5.5 0 1 1 1 0v1h1.25v-1a.5.5 0 1 1 1 0m3.5 0a.5.5 0 0 1-.5.5h-.5V13a.5.5 0 0 1-1 0v-2.5h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m4.5 0v3a.5.5 0 0 1-1 0v-1.5l-.6.8a.5.5 0 0 1-.8 0l-.6-.8V13a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .9-.3l1.1 1.467 1.1-1.467a.5.5 0 0 1 .9.3m3.5 3a.5.5 0 0 1-.5.5H13.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v2.5h1.25a.5.5 0 0 1 .5.5" /></g><defs><clipPath id="file-html-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileHtmlFill);
const Memo = memo(ForwardRef);
export default Memo;