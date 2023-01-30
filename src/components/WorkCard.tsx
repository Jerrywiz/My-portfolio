import { FC } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Grid } from "@mui/material";

interface Props {
  title: string;
  techTitle: string;
  description: string;
  repoLink: string;
  demoLink:string;
  index: number;
}

const WorkCard: FC<Props> = ({
  title,
  techTitle,
  description,
  repoLink,
  demoLink,
  index,
}: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: isTabletOrMobile
          ? { x: index % 2 === 0 ? -30 : 30, opacity: 0 }
          : { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
      }}
      transition={{
        duration: 0.8,
        delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
      viewport={{ once: true }}
      className="bg-bg-surface text-white px-10 py-8 flex flex-col space-y-2 rounded-sm transition-all duration-200 hover:drop-shadow-2xl"
    >
      <p className="text-white-secondary uppercase font-medium tracking-widest text-sm" >
        {techTitle}
      </p>
      <p className="font-medium text-xl tracking-wider name-gradient">{title}</p>
      <p className="text-white-secondary">{description}</p>
     <Grid container spacing={2} >
      <Grid md={5} mr={2} >
      <div className="flex items-center space-x-2 font-medium text-xs !mt-3">
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          className="uppercase py-2 px-4 rounded-md outline outline-fuchsia-800 outline-0 transition-all hover:outline-4"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 0, 255, 0.15), rgba(196,80,196, 0.15))",
          }}
        >
          Repository
        </a>
      </div>

      </Grid>
    
    <Grid md={5} >
    <div className="flex items-center space-x-2 font-medium text-xs !mt-3" >
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="uppercase py-2 px-4 rounded-md outline outline-fuchsia-800 outline-0 transition-all hover:outline-4"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 0, 255, 0.15), rgba(196,80,196, 0.15))",
          }}
        >
          Demo
        </a>
      </div>

    </Grid>
     </Grid>
    </motion.div>
  );
};

export default WorkCard;
