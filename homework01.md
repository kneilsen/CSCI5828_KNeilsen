#### Kristopher Neilsen

##### CSCI 5828 Foundations of Software Engineering

###### January 23rd 2018

###### Homework 1

**Review the material in Lectures 1 and 2 and read the No Silver Bullet article available on the class's GitHub repo. Based on that review and your own experience, answer the questions below.**

1.  **Define the term essential difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an essential difficulty.** 

  Brooks explains essential difficulties as problems with software that stem from the definition of what software is comprised of, not from the ways in which we implement and create software. Software is comprised of many concepts that are difficult to conceptualize since they aren’t tangible. For example, software is fairly complex and it is extremely difficult to visualize all of the functionality and workflow of software in a single diagram. Therefore, contains this essential complexity by definition, then there isn’t really a way to simplify this complexity or any other essential difficulty in order to achieve an order of magnitude improvement. 

  ​

2.  **Define the term accidental difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an accidental difficulty.** 

   An accidental difficulty is different than an essential difficulty, because the accidental difficulties come from how we approach creating software, and not by the definition of the software itself. Brooks gives an example of an accidental difficulty as the turnaround time between coding software and actual compiling and running the program. At the time the article was written, compilers and IDEs were not readily available on personal computers, and therefore there was a big time gap between implementing the code and compiling the code. During this time gap, the thoughts and ideas that a developer would have in their mind while coding could be lost and forgotten by the time that the developer gets the compilation results and returns to do more coding. However, this is an accidental difficulty that resulted from how people developed software at that time, and not a difficulty that existed in the ‘essence’ of software. Nowadays the accidental difficulty of turnaround time has been minimized (if not eliminated) with technology advancements, however it is a still a small difficulty in comparison to the essential difficulties of software (the essential difficulties that Brooks explains prevent the major improvement in software development).

  ​

3.  **List and briefly describe the four essential difficulties of developing software systems that Brooks identifies. Provide additional examples of each type of the four essential difficulties.**


*Complexity*

Software is a complex domain, containing many unique functions with different logic (hardly every duplicating the same parts), consisting of many different states that the program and or programmer need to keep track of (and are not always defined or caught), and lastly are often solving an already complex problem in the real world. An additional example of complexity that my company struggles with are all the corresponding artifacts that are needed in additional to just the software, such as requirements documents, technical design documents, user guides, installation guides and release notes, which all must be kept up to date and in sync for each release, which is usually more work than just creating the software. 

 *Conformity*

 Conformity is a complexity that does not really have a reason for why the software works or is asked to change in a certain way. The software is asked to work a certain way, which might not always be the best way. It is therefore extremely difficult to plan for irrational conformity because there is not a good rationale to design for how the software might change. An example of conformity is tax return software that is required to change annually to fit the federal IRS tax laws that can change annually. If a tax program could not change to fit these laws for the new tax year, then the program would not be successful.

 *Changeability*

 Software again is conceptual and is malleable and therefore easy to change. Since it is not a physical artifact, it is not like other domains where it is harder or more expensive to make changes on the existing artifacts. One example of conformity that our company has dealt with is at times we will allow a client to inform us of how they want functionality to work and be designed, because they are the highest bidder, even though it is not the best way for it to work and does not suit the needs of other clients.

 *Invisibility*

 Software is not a tangible artifact, already making it difficult to understand and is also difficult to convey to others. Brooks explains that other domain areas can be conceptualized in a single visualization, however software is so complex that it would be impossible to do that in a single diagram. This difficulty further enhances other difficulties, such as the difficulty of communicating and working on a piece of software with other people, which is already a challenging task in itself. 



4.  **Define what Brooks means by a silver bullet and reconstruct his argument as to why he believes there is no silver bullet for software engineering.**

  Brooks argument explains that software has both essential difficulties and accidental difficulties, which both prevent the improvement of software “reliability, simplicity and productivity”. However, Brooks argument is that most of the difficulties that are attempted to be improved upon today are accidental difficulties, and not the essential difficulties. For example, a lot of the new tools or processes just improve the difficulties that are caused by how people decide to approach software development, and these improvements don’t fundamentally improve any essential difficulties at all. In addition, Brooks explains that the essential difficulties (complexity, conformity, changeability, invisibility) are what prevent software from improving so greatly, and not the accidental difficulties. The essential difficulties stem from the very definition of what software is and not the approaches by people to create it. Therefore, if the essential difficulties are preventing the most improvements in software and are so complex, and only the accidental difficulties are being focused on for improvement (which doesn’t greatly improve software reliability, productivity or simplicity since software is “inherently complex”). These improvements might slightly improve software (but also can introduce new difficulties), therefore Brooks argues that there is no single technology improvement that can be made, or what he calls a “silver bullet”, that can improve software development by one order of magnitude, or a ten times improvement.  

5.  **In lecture, software engineering's relationship to computer science was described by analogy by discussing the differences between a chemist (chemistry) and a chemical engineer (chemical engineering). Define software engineering and its relationship to computer science; make use of the chemist vs. chemical engineer analogy when answering this question.**

  ​     Software engineering is a type of engineering used to solve software problems. In software engineering, many disciplines are involved in solving software problems (not just computer science), but also other domains such as mathematics, technical writing, communication, project management etc. 
  Software engineering is related to computer science, similar to how a chemist is related to chemical engineering. Where a chemist does things on a small scale and in a controlled environment, computer science likewise is comprised of concepts and theory. On the other hand, a software engineer, like a chemical engineer, must solve a problem (and can use those principles and theories) but also while dealing with real world constraints. The software engineer also must make decisions, often experience based, on the best tools and concepts to use that correctly fit those real-world constraints. Another great example is that a software engineer usually has to maintain and face difficult problems and older technology, where in computer science older technologies can be archived away and newer technologies can easily be studied and used instead. 

  ​

6.  **In lecture, we discussed the importance of the following concepts to software engineers: abstractions, conversations, specification, translation, and iteration. Define each of these concepts as they are related to software engineering and discuss their importance.**

  Abstractions are the primary tool used in software engineering and are used everywhere within software engineering to solve problems. Software solutions are built upon other tools, the details of which are abstracted away and not required by the context of what is using the tool. Software problems are also comprised of different layers of abstraction, broken down to solve the problem piece by piece and built upon each other to eventually comprise the whole solution.  
  Effective communication and conversations are essential to software engineering, as each step of the development process requires communication to achieve a reliable, quality solution. Conversations are used to elicit requirements, to discuss design, to resolve issues, and to communicate the details within a team, or across teams of people. Effective communication is important due to the very nature that software is ‘essentially’ complex to begin with. 
  Software engineering is very detail oriented and the concept of specification is important to software engineering as almost every step or task in software engineering requires detailed description on what is required. Specification also helps to eliminate ambiguity, because ambiguity can cause major issues in software engineering. 
  Translation is a frequent task done in software engineering, in many ways. Translation is done to translate the requirements of a user into a software design and solution, however translation is also related to abstraction as we translate a problem into another, to get closer to our solution. 
  Iteration is an important concept to software engineering as this is a fundamental approach to developing software. Software problems can be solved iteratively and   agile development life cycles also use the concept of iteration to solve a software problem in layers or slices. Even the tasks that are performed to solve a problem are done iteratively to reach a working solution. 