import styled from "styled-components";

import DynamicButton from "../components/DynamicButton";
import StyledCard from "../components/StyledCard";


const AboutContainer = styled.section`
  background-color: ${({ theme }) =>
    theme.background};

  color: ${({ theme }) =>
    theme.text};

  padding: 80px 0;

  min-height: 100vh;
`;


const Container = styled.div`
  width: min(1200px, 90%);

  margin: auto;
`;


const Hero = styled.div`
  text-align: center;

  max-width: 750px;

  margin: 0 auto 70px;

  h1 {
    font-size: 48px;

    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) =>
      theme.lightText};

    line-height: 1.7;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 30px;
    }
  }
`;


const MissionSection = styled.section`
  margin-bottom: 80px;
`;


const MissionGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;


const SectionTitle = styled.h2`
  text-align: center;

  font-size: 36px;

  margin-bottom: 40px;
`;


const TeamSection = styled.section`
  padding-top: 30px;
`;


const TeamGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 25px;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


const TeamMember = styled.div`
  text-align: center;

  h3 {
    margin-top: 15px;
  }

  p {
    color: ${({ theme }) =>
      theme.lightText};
  }
`;


const Avatar = styled.div`
  width: 90px;

  height: 90px;

  margin: auto;

  border-radius: 50%;

  background-color: ${({ theme }) =>
    theme.primary};

  color: white;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 28px;

  font-weight: bold;
`;


function About() {
  return (
    <AboutContainer id="about">

      <Container>

        {/* Company Introduction */}

        <Hero>
          <h1>
            About NovaTech
          </h1>

          <p>
            NovaTech is a modern technology
            company focused on creating
            innovative digital experiences.
            We help businesses grow through
            web development, applications,
            and creative digital solutions.
          </p>

          <br />

          <DynamicButton variant="primary">
            Contact Our Team
          </DynamicButton>
        </Hero>


        {/* Mission and Vision */}

        <MissionSection>

          <SectionTitle>
            Our Purpose
          </SectionTitle>

          <MissionGrid>

            <StyledCard>
              <h2>🎯 Our Mission</h2>

              <br />

              <p>
                Our mission is to build
                high-quality digital solutions
                that help businesses achieve
                their goals and grow in the
                modern digital world.
              </p>
            </StyledCard>


            <StyledCard>
              <h2>🚀 Our Vision</h2>

              <br />

              <p>
                Our vision is to become a
                trusted technology partner
                known for innovation,
                creativity, and excellent
                digital experiences.
              </p>
            </StyledCard>

          </MissionGrid>

        </MissionSection>


        {/* Team Section */}

        <TeamSection>

          <SectionTitle>
            Meet Our Team
          </SectionTitle>

          <TeamGrid>

            <StyledCard>
              <TeamMember>

                <Avatar>KP</Avatar>

                <h3>Kavy Patel</h3>

                <p>Frontend Developer</p>

              </TeamMember>
            </StyledCard>


            <StyledCard>
              <TeamMember>

                <Avatar>JD</Avatar>

                <h3>John Doe</h3>

                <p>UI/UX Designer</p>

              </TeamMember>
            </StyledCard>


            <StyledCard>
              <TeamMember>

                <Avatar>AS</Avatar>

                <h3>Alex Smith</h3>

                <p>Backend Developer</p>

              </TeamMember>
            </StyledCard>

          </TeamGrid>

        </TeamSection>

      </Container>

    </AboutContainer>
  );
}

export default About;