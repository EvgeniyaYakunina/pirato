import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFolderSimpleMinusFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#folder-simple-minus-fill_svg__a)"><path fill="#000" d="M13.5 4.5H8.167L6.433 3.2c-.173-.13-.384-.2-.6-.2H2.5a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h11.056a.945.945 0 0 0 .944-.944V5.5a1 1 0 0 0-1-1m-4 5h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1" /></g><defs><clipPath id="folder-simple-minus-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFolderSimpleMinusFill);
const Memo = memo(ForwardRef);
export default Memo;