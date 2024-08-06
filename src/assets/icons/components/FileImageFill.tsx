import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileImageFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-image-fill_svg__a)"><path fill="#000" d="M9.916 13.723a.5.5 0 0 1-.416.777h-8a.5.5 0 0 1-.42-.77l2.25-3.5a.5.5 0 0 1 .84 0l.61.948 1.304-1.956a.5.5 0 0 1 .832 0zM13.5 5.5v8a1 1 0 0 1-1 1H12a.5.5 0 0 1 0-1h.5V6h-3a.5.5 0 0 1-.5-.5v-3H3.5V8a.5.5 0 1 1-1 0V2.5a1 1 0 0 1 1-1h6a.5.5 0 0 1 .354.146l3.5 3.5a.5.5 0 0 1 .146.354M10 5h1.793L10 3.207z" /></g><defs><clipPath id="file-image-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileImageFill);
const Memo = memo(ForwardRef);
export default Memo;