$("./body") {
	$("./div[@id='wrapper']"){
		$(".//div[@id='main']"){
			$(".//div[@id='content']"){
				#remove()  #temporary removed.
				#add_class("home-content")
				
			}
			$("./div[@class='main-holder']"){
				$("./div[@id='sidebar']"){
					## the club finder div 
					$(".//div[@class='sidebar-holder']"){
						$("./div[@class='box-form']"){
							$("./div[@id='tab-1']"){
								
								$(".//fieldset"){
									#$("./div[@class='field'][1]"){
										#$("./div[@class='row'][2]"){
										#	#remove()
										#	insert_after("div",class:"date-group")
										#	$("./div[contains(@class,'half-col')]"){#remove()
										#		$("./div[@class='row'][2]") {
										#			%one = this()
										#			$("../div[@class='row'][3]") {
										#				move_children_to(%one, position("bottom"))
										#				remove()
										#			}
										#			wrap("div",class:"date-input") {
										#				$("./div") {
										#					unwrap()
										#				}
										#			}
												  
										#		}
												
										#	}
											
										#}
										#$("./div[@class='date-group']"){
										#	move_here('//div[@class="date-input"]')
										#}
										
									#}
									$("./div[@class='field'][2]"){
										$("./div[@class='row'][2]"){
											
											$("./div[contains(@class,'col')][4]"){
												insert_before("div",class:"col"){
													add_class("quarter-col")
													move_here(".././div[position()<4]","bottom"){
														wrap("div",class:"row") {
															$("./div") {
																unwrap()
															}
														}
													}
												}
											}
										}
									}	
								
								}
							}
							$("./div[@id='tab-2']"){
								$(".//fieldset"){
									$("./div[@class='field'][2]"){
										$("./div[@class='row'][1]"){
											%two = this()
											$("../div[@class='row'][2]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
									}
									$("./div[@class='field'][3]"){
										$("./div[@class='row'][2]"){
											$("./div[contains(@class,'half-col')]"){
												remove_class('half-col')
												add_class('quarter-col')
											}
											insert_bottom("div",class:"quarter-col"){
												add_class("col")
												%three = this()
												$("(.././div[contains(@class,'quarter-col')])[1]") {
													
													$("(./div[@class='row'])[5]"){
														wrap("div",class:"check-group") {
														  move_children_to(%three, position("top"))
														  remove()
														}	
													}
													$("(./div[@class='row'])[4]"){
														wrap("div",class:"check-group") {
															move_children_to(%three, position("bottom"))
															remove()
														}	
													}
										
												}
												$("(.././div[contains(@class,'quarter-col')])[2]") {
													$("(./div[@class='row'])[4]"){
														wrap("div",class:"check-group") {
															move_children_to(%three, position("bottom"))
															remove()
														}	
													}
										
												}
											}
										}
									}
								}
							}
							$("./div[@id='tab-3']"){
								$(".//fieldset"){
									$("(./div[@class='field'])[1]"){
										$("(./div[@class='row'])[1]"){
											%four = this()
											$("./div[contains(@class,'quart-col')]") {
												remove_class("quart-col")
												add_class("quarter-col")
											}
											$("(.././div[@class='row'])[2]"){
												$("./div[contains(@class,'half-col')]"){
													remove_class("half-col")
													add_class("third-col")
												}
												move_children_to(%four, position("bottom"))
												remove()
											}
										}
										$("./div[@id='radio-tab3']"){
											%six =this()
											$("./div[contains(@class,'half-col')]"){
												$("./div[@class='row'][1]"){
													%seven=this()
													$("../div[@class='row'][2]") {
														move_children_to(%seven, position("bottom"))
														remove()
													}	
												}
												move_children_to(%six, position("bottom"))
												remove()
											}
										}
									}
									$("(./div[@class='field'])[2]"){
										$("./div[@class='row'][1]"){
											%two = this()
											$("../div[@class='row'][2]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
										$("./div[@class='row'][2]"){
											%two = this()
											$("../div[@class='row'][3]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
										$("./div[@class='row'][3]"){
											%two = this()
											$("../div[@class='row'][4]") {
												move_children_to(%two, position("bottom"))
												remove()
											}
										}
									}		
								}
							}
						}
					}
					##Ramesh code starts here
				
					insert_at("before","div",id:"hmContentDiv")
					$('./div[@id="c12248"]'){
						insert_at("before","div",id:"hmDiv")
					}
					
					$('./div[@id="c12420"]'){
						move_to('../div[@id="hmDiv"]',"top")
						insert_at("after","div",id:"hrLine")
						$('.//ul'){
							$('./li'){
								$('./a'){
									insert_at("after","div",id:"hrdottedLine")
								}
							}
						}
					}
					$('./div[@id="c12316"]'){
						#$('./div[@class="links-block"]'){
							#{
							#	move_to("../../div[@id='c12316']","bottom")
								#remove()
							#}
						#}
						move_to('../div[@id="hmDiv"]',"bottom")
					}
					##Ramesh code ends here	
				}
				##Ramesh code starts here
				$('./div[@id="content"]'){
					move_here("./div[@id='c12136']","top")
					$(".//div[contains(@class,'gallery')]"){
						$sid = index()
						
						$(".//img") {
							attribute("width","")
							attribute("height","")
						}
						$("./div[@class = 'switcher']"){
							remove()
						}
					}
					
					$('./div[@id="c12137"]'){
						move_to('../.././div[@id="hmContentDiv"]',"top")
					}
				}
				$('./div[@id="hmContentDiv"]'){
					$('./div[@id="c12137"]'){
						$('./div[@class="content-posts"]'){
							$('./div'){
								#attribute("id","cont1")
								attribute("id","cont"+index(this()))
							}
							
							$('./div[@id="cont1"]'){
								$('./div[@class="img-holder red"]'){
									insert_at("after","div",id:"mFamContent")
								}
								$('./div[@id="mFamContent"]'){
									insert("div",id:"mDivText")
									insert("div",id:"mDivAnchor")
									$('./div[@id="mDivText"]'){
										move_here('../.././p',"top")
										
									}									
									$('./div[@id="mDivAnchor"]'){
										move_here('../.././a',"bottom")
									}
								}
							}
							$('./div[@id="cont2"]'){
								$('./div[@class="img-holder green"]'){
									insert_at("after","div",id:"mEntertainment")
								}
								$('./div[@id="mEntertainment"]'){
									insert("div",id:"mDivText")
									insert("div",id:"mDivAnchor")
									$('./div[@id="mDivText"]'){
										move_here('../.././p',"top")
									}	
									$('./div[@id="mDivAnchor"]'){
										move_here('../.././a',"bottom")
									}	
								}
							}
							$('./div[@id="cont3"]'){
								$('./div[@class="img-holder blue"]'){
									insert_at("after","div",id:"mSport")
								}
								$('./div[@id="mSport"]'){
									insert("div",id:"mDivText")
									insert("div",id:"mDivAnchor")
									$('./div[@id="mDivText"]'){
										move_here('../.././p',"top")
									}	
									$('./div[@id="mDivAnchor"]'){
										move_here('../.././a',"bottom")
									}	
								}
							}
							$('./div[@id="cont4"]'){
								$('./div[@class="img-holder brown"]'){
									insert_at("after","div",id:"mChillax")
								}
								$('./div[@id="mChillax"]'){
									insert("div",id:"mDivText")
									insert("div",id:"mDivAnchor")
									$('./div[@id="mDivText"]'){
										move_here('../.././p',"top")
										
									}	
									$('./div[@id="mDivAnchor"]'){
										move_here('../.././a',"bottom")
									}	
								}
							}
						}
					}
					move_here(".././/div[@id='hmDiv']","before")
				}
				
				##Ramesh code ends here	
			}	
		}
	}
}	