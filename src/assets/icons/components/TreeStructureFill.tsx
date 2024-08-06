import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTreeStructureFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#tree-structure-fill_svg__a)"><path fill="#000" d="M9 6V5H8a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1v-1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1H8a1.5 1.5 0 0 1-1.5-1.5v-2h-2V9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v.5h2v-2A1.5 1.5 0 0 1 8 4h1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1" /></g><defs><clipPath id="tree-structure-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgTreeStructureFill);
const Memo = memo(ForwardRef);
export default Memo;