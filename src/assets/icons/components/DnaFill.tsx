import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDnaFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dna-fill_svg__a)"><path fill="#000" d="M12.5 12.781v1.72a.5.5 0 1 1-1 0v-1.72a3.98 3.98 0 0 0-2.211-3.578L6.264 7.691A4.97 4.97 0 0 1 3.5 3.22V1.5a.5.5 0 0 1 1 0V3.22A3.98 3.98 0 0 0 6.71 6.797l3.025 1.512A4.97 4.97 0 0 1 12.5 12.78m-2.301-.78H5.244a.5.5 0 0 1-.5-.534.51.51 0 0 1 .517-.467h4.095a.25.25 0 0 0 .172-.431 3 3 0 0 0-.687-.47l-2.916-1.46a.25.25 0 0 0-.255.02A4.97 4.97 0 0 0 3.5 12.78v1.702a.51.51 0 0 0 .467.517.5.5 0 0 0 .533-.5v-1h5.75a.25.25 0 0 0 .25-.25v-.469q0-.293-.056-.582a.25.25 0 0 0-.245-.199m1.768-11a.51.51 0 0 0-.467.516V2.5H5.75a.25.25 0 0 0-.25.25v.469q0 .293.056.582a.25.25 0 0 0 .245.2h4.938a.51.51 0 0 1 .515.466.5.5 0 0 1-.5.533h-4.11a.25.25 0 0 0-.172.431q.31.283.687.471l2.917 1.459a.25.25 0 0 0 .255-.019A4.97 4.97 0 0 0 12.5 3.219V1.5a.5.5 0 0 0-.533-.5" /></g><defs><clipPath id="dna-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDnaFill);
const Memo = memo(ForwardRef);
export default Memo;