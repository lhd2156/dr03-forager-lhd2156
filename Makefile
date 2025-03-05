########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = LOUISDO
SID = 1002072156
EMAIL = LHD2156@MAVS.UTA.EDU
SEMESTER = SPRING2025
PROJECT=PROJ03
VID = https://youtube.com/shorts/4BOTg5Fvmp4?feature=share

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"