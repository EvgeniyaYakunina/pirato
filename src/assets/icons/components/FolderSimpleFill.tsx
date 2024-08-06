import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-simple-fill_svg__a)"><path fill="#000" d="M14.5 5.5v7.056a.945.945 0 0 1-.944.944H2.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3.333c.216 0 .427.07.6.2l1.734 1.3H13.5a1 1 0 0 1 1 1" /></g><defs><clipPath id="folder-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;