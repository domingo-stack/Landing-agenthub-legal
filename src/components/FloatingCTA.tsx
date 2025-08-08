import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      <Button 
        className={buttonVariants({ variant: "cta", size: "default" })}
        asChild
      >
        <a href="#planes" className="shadow-glow">
          Regístrate acá
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;