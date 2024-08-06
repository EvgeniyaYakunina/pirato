import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFileTsxFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#file-tsx-fill_svg__a)"><path fill="#000" d="m13.354 5.146-3.5-3.5A.5.5 0 0 0 9.5 1.5h-6a1 1 0 0 0-1 1v4.75a.25.25 0 0 0 .25.25h10.5a.25.25 0 0 0 .25-.25V5.5a.5.5 0 0 0-.146-.354M9.5 5.5V2.75l2.75 2.75zm3.907 4.29-1.043 1.46 1.043 1.46a.5.5 0 0 1-.813.58l-.844-1.18-.843 1.18a.5.5 0 1 1-.813-.58l1.042-1.46-1.043-1.46a.5.5 0 0 1 .144-.716.51.51 0 0 1 .68.15l.833 1.166.843-1.18a.5.5 0 0 1 .813.58m-4.169 2.48a1.3 1.3 0 0 1-.574.951c-.325.216-.726.279-1.093.279a3.8 3.8 0 0 1-.946-.125.5.5 0 1 1 .269-.963c.274.075.937.17 1.222-.022.055-.038.114-.095.133-.246.022-.167-.045-.256-.798-.474-.585-.169-1.563-.452-1.438-1.445a1.29 1.29 0 0 1 .563-.934c.74-.5 1.92-.207 2.052-.172a.5.5 0 0 1-.254.967c-.28-.073-.952-.16-1.24.035a.28.28 0 0 0-.125.23c-.007.056-.008.067.07.118.144.094.403.168.653.24.611.177 1.643.479 1.506 1.56M5.5 9.532a.51.51 0 0 1-.517.467H4.25v2.983a.51.51 0 0 1-.467.517.5.5 0 0 1-.533-.5v-3h-.733A.51.51 0 0 1 2 9.533.5.5 0 0 1 2.5 9H5a.5.5 0 0 1 .5.533" /></g><defs><clipPath id="file-tsx-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgFileTsxFill);
const Memo = memo(ForwardRef);
export default Memo;