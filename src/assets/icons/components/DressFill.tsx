import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDressFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dress-fill_svg__a)"><path fill="#000" d="M4.141 5.015a.95.95 0 0 1-.103-.761 1 1 0 0 1 .125-.298L5.5 2.044V.5a.5.5 0 0 1 .533-.5.51.51 0 0 1 .467.517v1.51l.328.41a1.494 1.494 0 0 0 1.846.399c.202-.102.38-.247.52-.425l.306-.385V.5a.5.5 0 0 1 .533-.5.51.51 0 0 1 .467.517v1.527l1.339 1.912a1 1 0 0 1 .125.298.95.95 0 0 1-.11.772l-.866 1.359a.25.25 0 0 1-.213.115h-5.55a.25.25 0 0 1-.211-.115l-.866-1.36zm9.281 8.097-.009-.021-2.557-5.447a.25.25 0 0 0-.227-.144H5.37a.25.25 0 0 0-.227.144L2.587 13.09l-.01.021a1.01 1.01 0 0 0 .023.826 1 1 0 0 0 .9.562h9a1 1 0 0 0 .922-1.388" /></g><defs><clipPath id="dress-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDressFill);
const Memo = memo(ForwardRef);
export default Memo;