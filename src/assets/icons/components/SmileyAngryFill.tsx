import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSmileyAngryFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#smiley-angry-fill_svg__a)"><path fill="#000" d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5M5 8.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0m4.916 3.027a.5.5 0 0 1-.693.14C8.817 11.646 8.5 11.5 8 11.5s-.817.146-1.223.416a.5.5 0 0 1-.554-.832c.527-.35 1.03-.584 1.777-.584s1.25.233 1.777.584a.5.5 0 0 1 .14.693M10.25 9.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m1.027-3.584-3 2a.5.5 0 0 1-.554 0l-3-2a.5.5 0 0 1 .555-.832L8 6.899l2.723-1.812a.5.5 0 0 1 .554.832z" /></g><defs><clipPath id="smiley-angry-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSmileyAngryFill);
const Memo = memo(ForwardRef);
export default Memo;