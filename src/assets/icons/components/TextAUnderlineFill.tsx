import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTextAUnderlineFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#text-a-underline-fill_svg__a)"><path fill="#000" d="M9.296 7.5H6.704L8 4.693zM13.5 2v12a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5m-8.71 8.454a.5.5 0 0 0 .664-.245l.79-1.709h3.513l.79 1.71a.5.5 0 0 0 .907-.42l-3-6.5a.5.5 0 0 0-.908 0l-3 6.5a.5.5 0 0 0 .245.664M12.5 12a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5" /></g><defs><clipPath id="text-a-underline-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTextAUnderlineFill);
const Memo = memo(ForwardRef);
export default Memo;