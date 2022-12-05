var allSkillsList = ['The Last Boss', 'The Untouchable', 'Cleaning Up Your Mess', 'Ace', 'Giant Crusher', 'Inning Eater',
                  'Putaway Pitch', 'Iron Will', 'Dominant Pitcher', 'Finesse Pitcher', 'Firefighter', 'Stability', 
                  'Winning Streak', 'Fixer', 'Golden Pitcher', 'Pitching Machine', 'Power Pitcher', 'The Setup Man',
                  'Control Artist', '3-4-5 Specialist', 'Warmed Up', 'Field Commander', 'Calm Mind', 'Danger Zone',
                  'Fearless', 'Lightning Pitch', 'Righty Specialist', 'Breaking Ball Mastery', 'Lefty Specialist',
                  'Strong Stamina', 'Seasoned Pitcher', 'Thin Ice', 'Strong Mentality', 'Pick-off King']

var legendSkillsList = ['Control Master', 'Fireballer', "Pitcher's Insight", "Pitcher's Chemistry", 'Slow Starter',
                     'Cooperative Pitching', 'Bullpen Day']

var goldSkillsList = ['The Last Boss', 'The Untouchable', 'Cleaning Up Your Mess', 'Ace', 'Giant Crusher', 'Inning Eater', 
                   'Putaway Pitch', 'Iron Will', 'Dominant Pitcher', 'Finesse Pitcher']

var silverSkillsList = ['Firefighter', 'Stability', 'Winning Streak', 'Fixer', 'Golden Pitcher', 'Pitching Machine',
                       'Power Pitcher', 'The Setup Man', 'Control Artist', '3-4-5 Specialist', 'Warmed Up', 'Field Commander']

var bronzeSkillsList = ['Calm Mind', 'Danger Zone', 'Fearless', 'Lightning Pitch', 'Righty Specialist', 'Breaking Ball Mastery',
                     'Lefty Specialist', 'Strong Stamina', 'Seasoned Pitcher', 'Thin Ice', 'Strong Mentality', 'Pick-off King']

const changeSkills = $('#change-skills')

// Hides the skills that are already selected for the other slots

$('#skill-1-input').change(function () {
    $('#skill-1').html($('#skill-1-input').val() + ' Lv. ' + $('#skill-1-input-level').val())

    $('.hidden1').show()

    if($('#skill-1-input').val() != 'select') {
        $(`#skill-2-input option[value="${$('#skill-1-input').val()}"]`).hide()
        $(`#skill-2-input option[value="${$('#skill-1-input').val()}"]`).attr('class', 'hidden1')
        $(`#skill-3-input option[value="${$('#skill-1-input').val()}"]`).hide()
        $(`#skill-3-input option[value="${$('#skill-1-input').val()}"]`).attr('class', 'hidden1')
    }

    if(bronzeSkillsList.includes($('#skill-1-input').val())) {
        $('#skill-1').attr('class', 'bronze')
        if($('#skill-1-input-level option').length != 6) {
            if(parseInt($('#skill-1-input-level').val()) > 6) {
                $('#skill-1').html($('#skill-1-input').val() + ' Lv. ' + 1)
            }
            $('#skill-1-input-level option[value="7"]').remove()
            $('#skill-1-input-level option[value="8"]').remove()
        }
    } else if(silverSkillsList.includes($('#skill-1-input').val())) {
        $('#skill-1').attr('class', 'silver')
        if($('#skill-1-input-level option').length != 6) {
            if(parseInt($('#skill-1-input-level').val()) > 6) {
                $('#skill-1').html($('#skill-1-input').val() + ' Lv. ' + 1)
            }
            $('#skill-1-input-level option[value="7"]').remove()
            $('#skill-1-input-level option[value="8"]').remove()
        }
    } else if(goldSkillsList.includes($('#skill-1-input').val()) && parseInt($('#skill-1-input-level').val()) < 7) {
        $('#skill-1').attr('class', 'gold')
        if($('#skill-1-input-level option').length == 6) {
            $('#skill-1-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-1-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else if(goldSkillsList.includes($('#skill-1-input').val()) && parseInt($('#skill-1-input-level').val()) >= 7) {
        $('#skill-1').attr('class', 'diamond')
        if($('#skill-1-input-level option').length == 6) {
            $('#skill-1-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-1-input-level').append('<option value="8">Lv. 8</option>')
        } 
    } else {
        $('#skill-1').attr('class', 'legend')
        if($('#skill-1-input-level option').length != 6) {
            if(parseInt($('#skill-1-input-level').val()) > 6) {
                $('#skill-1').html($('#skill-1-input').val() + ' Lv. ' + 1)
            }
            $('#skill-1-input-level option[value="7"]').remove()
            $('#skill-1-input-level option[value="8"]').remove()
        }
    }
})

$('#skill-1-input-level').change(function () {
    if($('#skill-1-input').val() != 'select') {
        $('#skill-1').html($('#skill-1-input').val() + ' Lv. ' + $('#skill-1-input-level').val())
    }

    if(bronzeSkillsList.includes($('#skill-1-input').val())) {
        $('#skill-1').attr('class', 'bronze')
        if($('#skill-1-input-level option').length != 6) {
            if(parseInt($('#skill-1-input-level').val()) > 6) {
                $('#skill-1').html($('#skill-1-input').val() + ' Lv. ' + 1)
            }
            $('#skill-1-input-level option[value="7"]').remove()
            $('#skill-1-input-level option[value="8"]').remove()
        }
    } else if(silverSkillsList.includes($('#skill-1-input').val())) {
        $('#skill-1').attr('class', 'silver')
        if($('#skill-1-input-level option').length != 6) {
            if(parseInt($('#skill-1-input-level').val()) > 6) {
                $('#skill-1').html($('#skill-1-input').val() + ' Lv. ' + 1)
            }
            $('#skill-1-input-level option[value="7"]').remove()
            $('#skill-1-input-level option[value="8"]').remove()
        }
    } else if(goldSkillsList.includes($('#skill-1-input').val()) && parseInt($('#skill-1-input-level').val()) < 7) {
        $('#skill-1').attr('class', 'gold')
        if($('#skill-1-input-level option').length == 6) {
            $('#skill-1-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-1-input-level').append('<option value="8">Lv. 8</option>')
        } 
    } else if(goldSkillsList.includes($('#skill-1-input').val()) && parseInt($('#skill-1-input-level').val()) >= 7) {
        $('#skill-1').attr('class', 'diamond')
        if($('#skill-1-input-level option').length == 6) {
            $('#skill-1-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-1-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else {
        $('#skill-1').attr('class', 'legend')
        if($('#skill-1-input-level option').length != 6) {
            if(parseInt($('#skill-1-input-level').val()) > 6) {
                $('#skill-1').html($('#skill-1-input').val() + ' Lv. ' + 1)
            }
            $('#skill-1-input-level option[value="7"]').remove()
            $('#skill-1-input-level option[value="8"]').remove()
        }
    }
})

$('#skill-2-input').change(function () {
    $('#skill-2').html($('#skill-2-input').val() + ' Lv. ' + $('#skill-2-input-level').val())

    $('.hidden2').show()

    if($('#skill-2-input').val() != 'select') {
        $(`#skill-1-input option[value="${$('#skill-2-input').val()}"]`).hide()
        $(`#skill-1-input option[value="${$('#skill-2-input').val()}"]`).attr('class', 'hidden2')
        $(`#skill-3-input option[value="${$('#skill-2-input').val()}"]`).hide()
        $(`#skill-3-input option[value="${$('#skill-2-input').val()}"]`).attr('class', 'hidden2')
    }

    if(bronzeSkillsList.includes($('#skill-2-input').val())) {
        $('#skill-2').attr('class', 'bronze')
        if($('#skill-2-input-level option').length != 6) {
            if(parseInt($('#skill-2-input-level').val()) > 6) {
                $('#skill-2').html($('#skill-2-input').val() + ' Lv. ' + 1)
            }
            $('#skill-2-input-level option[value="7"]').remove()
            $('#skill-2-input-level option[value="8"]').remove()
        }
    } else if(silverSkillsList.includes($('#skill-2-input').val())) {
        $('#skill-2').attr('class', 'silver')
        if($('#skill-2-input-level option').length != 6) {
            if(parseInt($('#skill-2-input-level').val()) > 6) {
                $('#skill-2').html($('#skill-2-input').val() + ' Lv. ' + 1)
            }
            $('#skill-2-input-level option[value="7"]').remove()
            $('#skill-2-input-level option[value="8"]').remove()
        }
    } else if(goldSkillsList.includes($('#skill-2-input').val()) && parseInt($('#skill-2-input-level').val()) < 7) {
        $('#skill-2').attr('class', 'gold')
        if($('#skill-2-input-level option').length == 6) {
            $('#skill-2-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-2-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else if(goldSkillsList.includes($('#skill-2-input').val()) && parseInt($('#skill-2-input-level').val()) >= 7) {
        $('#skill-2').attr('class', 'diamond')
        if($('#skill-2-input-level option').length == 6) {
            $('#skill-2-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-2-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else {
        $('#skill-2').attr('class', 'legend')
        if($('#skill-2-input-level option').length != 6) {
            if(parseInt($('#skill-2-input-level').val()) > 6) {
                $('#skill-2').html($('#skill-2-input').val() + ' Lv. ' + 1)
            }
            $('#skill-2-input-level option[value="7"]').remove()
            $('#skill-2-input-level option[value="8"]').remove()
        }
    }
})

$('#skill-2-input-level').change(function () {
    if($('#skill-2-input').val() != 'select') {
        $('#skill-2').html($('#skill-2-input').val() + ' Lv. ' + $('#skill-2-input-level').val())
    }

    if(bronzeSkillsList.includes($('#skill-2-input').val())) {
        $('#skill-2').attr('class', 'bronze')
        if($('#skill-2-input-level option').length != 6) {
            if(parseInt($('#skill-2-input-level').val()) > 6) {
                $('#skill-2').html($('#skill-2-input').val() + ' Lv. ' + 1)
            }
            $('#skill-2-input-level option[value="7"]').remove()
            $('#skill-2-input-level option[value="8"]').remove()
        }
    } else if(silverSkillsList.includes($('#skill-2-input').val())) {
        $('#skill-2').attr('class', 'silver')
        if($('#skill-2-input-level option').length != 6) {
            if(parseInt($('#skill-2-input-level').val()) > 6) {
                $('#skill-2').html($('#skill-2-input').val() + ' Lv. ' + 1)
            }
            $('#skill-2-input-level option[value="7"]').remove()
            $('#skill-2-input-level option[value="8"]').remove()
        }
    } else if(goldSkillsList.includes($('#skill-2-input').val()) && parseInt($('#skill-2-input-level').val()) < 7) {
        $('#skill-2').attr('class', 'gold')
        if($('#skill-2-input-level option').length == 6) {
            $('#skill-2-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-2-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else if(goldSkillsList.includes($('#skill-2-input').val()) && parseInt($('#skill-2-input-level').val()) >= 7) {
        $('#skill-2').attr('class', 'diamond')
        if($('#skill-2-input-level option').length == 6) {
            $('#skill-2-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-2-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else {
        $('#skill-2').attr('class', 'legend')
        if($('#skill-2-input-level option').length != 6) {
            if(parseInt($('#skill-2-input-level').val()) > 6) {
                $('#skill-2').html($('#skill-2-input').val() + ' Lv. ' + 1)
            }
            $('#skill-2-input-level option[value="7"]').remove()
            $('#skill-2-input-level option[value="8"]').remove()
        }
    }
})

$('#skill-3-input').change(function () {
    $('#skill-3').html($('#skill-3-input').val() + ' Lv. ' + $('#skill-3-input-level').val())

    $('.hidden3').show()

    if($('#skill-3-input').val() != 'select') {
        $(`#skill-1-input option[value="${$('#skill-3-input').val()}"]`).hide()
        $(`#skill-1-input option[value="${$('#skill-3-input').val()}"]`).attr('class', 'hidden3')
        $(`#skill-2-input option[value="${$('#skill-3-input').val()}"]`).hide()
        $(`#skill-2-input option[value="${$('#skill-3-input').val()}"]`).attr('class', 'hidden3')
    }

    if(bronzeSkillsList.includes($('#skill-3-input').val())) {
        $('#skill-3').attr('class', 'bronze')
        if($('#skill-3-input-level option').length != 6) {
            if(parseInt($('#skill-3-input-level').val()) > 6) {
                $('#skill-3').html($('#skill-3-input').val() + ' Lv. ' + 1)
            }
            $('#skill-3-input-level option[value="7"]').remove()
            $('#skill-3-input-level option[value="8"]').remove()
        }
    } else if(silverSkillsList.includes($('#skill-3-input').val())) {
        $('#skill-3').attr('class', 'silver')
        if($('#skill-3-input-level option').length != 6) {
            if(parseInt($('#skill-3-input-level').val()) > 6) {
                $('#skill-3').html($('#skill-3-input').val() + ' Lv. ' + 1)
            }
            $('#skill-3-input-level option[value="7"]').remove()
            $('#skill-3-input-level option[value="8"]').remove()
        }
    } else if(goldSkillsList.includes($('#skill-3-input').val()) && parseInt($('#skill-3-input-level').val()) < 7) {
        $('#skill-3').attr('class', 'gold')
        if($('#skill-3-input-level option').length == 6) {
            $('#skill-3-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-3-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else if(goldSkillsList.includes($('#skill-3-input').val()) && parseInt($('#skill-3-input-level').val()) >= 7) {
        $('#skill-3').attr('class', 'diamond')
        if($('#skill-3-input-level option').length == 6) {
            $('#skill-3-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-3-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else {
        $('#skill-3').attr('class', 'legend')
        if($('#skill-3-input-level option').length != 6) {
            if(parseInt($('#skill-3-input-level').val()) > 6) {
                $('#skill-3').html($('#skill-3-input').val() + ' Lv. ' + 1)
            }
            $('#skill-3-input-level option[value="7"]').remove()
            $('#skill-3-input-level option[value="8"]').remove()
        }
    }
})

$('#skill-3-input-level').change(function () {
    if($('#skill-3-input').val() != 'select') {
        $('#skill-3').html($('#skill-3-input').val() + ' Lv. ' + $('#skill-3-input-level').val())
    }

    if(bronzeSkillsList.includes($('#skill-3-input').val())) {
        $('#skill-3').attr('class', 'bronze')
        if($('#skill-3-input-level option').length != 6) {
            if(parseInt($('#skill-3-input-level').val()) > 6) {
                $('#skill-3').html($('#skill-3-input').val() + ' Lv. ' + 1)
            }
            $('#skill-3-input-level option[value="7"]').remove()
            $('#skill-3-input-level option[value="8"]').remove()
        }
    } else if(silverSkillsList.includes($('#skill-3-input').val())) {
        $('#skill-3').attr('class', 'silver')
        if($('#skill-3-input-level option').length != 6) {
            if(parseInt($('#skill-3-input-level').val()) > 6) {
                $('#skill-3').html($('#skill-3-input').val() + ' Lv. ' + 1)
            }
            $('#skill-3-input-level option[value="7"]').remove()
            $('#skill-3-input-level option[value="8"]').remove()
        }
    } else if(goldSkillsList.includes($('#skill-3-input').val()) && parseInt($('#skill-3-input-level').val()) < 7) {
        $('#skill-3').attr('class', 'gold')
        if($('#skill-3-input-level option').length == 6) {
            $('#skill-3-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-3-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else if(goldSkillsList.includes($('#skill-3-input').val()) && parseInt($('#skill-3-input-level').val()) >= 7) {
        $('#skill-3').attr('class', 'diamond')
        if($('#skill-3-input-level option').length == 6) {
            $('#skill-3-input-level').append('<option value="7">Lv. 7</option>')
            $('#skill-3-input-level').append('<option value="8">Lv. 8</option>')
        }
    } else {
        $('#skill-3').attr('class', 'legend')
        if($('#skill-3-input-level option').length != 6) {
            if(parseInt($('#skill-3-input-level').val()) > 6) {
                $('#skill-3').html($('#skill-3-input').val() + ' Lv. ' + 1)
            }
            $('#skill-3-input-level option[value="7"]').remove()
            $('#skill-3-input-level option[value="8"]').remove()
        }
    }
})

changeSkills.bind('click', event => {
    var allSkillsP = ['The Last Boss', 'The Untouchable', 'Cleaning Up Your Mess', 'Ace', 'Giant Crusher', 'Inning Eater',
    'Putaway Pitch', 'Iron Will', 'Dominant Pitcher', 'Finesse Pitcher', 'Firefighter', 'Stability', 
    'Winning Streak', 'Fixer', 'Golden Pitcher', 'Pitching Machine', 'Power Pitcher', 'The Setup Man',
    'Control Artist', '3-4-5 Specialist', 'Warmed Up', 'Field Commander', 'Calm Mind', 'Danger Zone',
    'Fearless', 'Lightning Pitch', 'Righty Specialist', 'Breaking Ball Mastery', 'Lefty Specialist',
    'Strong Stamina', 'Seasoned Pitcher', 'Thin Ice', 'Strong Mentality', 'Pick-off King']

    var goldSkillsP = ['The Last Boss', 'The Untouchable', 'Cleaning Up Your Mess', 'Ace', 'Giant Crusher', 'Inning Eater', 
        'Putaway Pitch', 'Iron Will', 'Dominant Pitcher', 'Finesse Pitcher']

    var silverSkillsP = ['Firefighter', 'Stability', 'Winning Streak', 'Fixer', 'Golden Pitcher', 'Pitching Machine',
            'Power Pitcher', 'The Setup Man', 'Control Artist', '3-4-5 Specialist', 'Warmed Up', 'Field Commander']

    var bronzeSkillsP = ['Calm Mind', 'Danger Zone', 'Fearless', 'Lightning Pitch', 'Righty Specialist', 'Breaking Ball Mastery',
        'Lefty Specialist', 'Strong Stamina', 'Seasoned Pitcher', 'Thin Ice', 'Strong Mentality', 'Pick-off King']

    const skillToChange = $('input[name="skill-input-radio"]:checked').val()
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    if(skillToChange != 'skill1' && skillToChange != 'skill2' && skillToChange != 'skill3') {
        alert('Select the skill that you want to change!')
        event.preventDefault()
    } else if($('#skill-1-input').val() == 'select' || $('#skill-2-input').val() == 'select' || $('#skill-3-input').val() == 'select') {
        alert('Select the skill set!')
        event.preventDefault()
    } else if((parseInt($('#skill-1-input-level').val()) == 8 && parseInt($('#skill-2-input-level').val()) == 8) ||
              (parseInt($('#skill-1-input-level').val()) == 8 && parseInt($('#skill-3-input-level').val()) == 8) ||
              (parseInt($('#skill-2-input-level').val()) == 8 && parseInt($('#skill-3-input-level').val()) == 8)) {
        alert("You can't have more than one player with a level 8 skill!")
        event.preventDefault()
    } else {
        if(skillToChange == 'skill1') {
            for(let x = 0; x < allSkillsP.length; x++) {
                if(allSkillsP[x] == $('#skill-1').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(x, 1)
                }
            }
            
            for(let y = 0; y < allSkillsP.length; y++) {
                if(allSkillsP[y] == $('#skill-2').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(y, 1)
                }
            }
            
            for(let z = 0; z < allSkillsP.length; z++) {
                if(allSkillsP[z] == $('#skill-3').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(z, 1)
                }
            }
            
            var newSkill = allSkillsP[getRandomInt(allSkillsP.length)]
            
            for(let a = 0; a < allSkillsP.length; a++) {
                if(allSkillsP[a] == newSkill) {
                    allSkillsP.splice(a, 1)
                }
            }
            
            $('#skill-1').html('')
            $('#skill-1').attr('class', 'white')
            
            var skillLevel = parseInt($('#skill-1-input-level').val())

            sleep(500).then(() => {
                if(bronzeSkillsP.includes(newSkill)) {
                    $('#skill-1').attr('class', 'bronze')
                    if(parseInt($('#skill-1-input-level').val()) > 6) {
                        skillLevel = 6
                    }
                } else if(silverSkillsP.includes(newSkill)) {
                    $('#skill-1').attr('class', 'silver')
                    if(parseInt($('#skill-1-input-level').val()) > 6) {
                        skillLevel = 6
                    }
                } else if(goldSkillsP.includes(newSkill)) {
                    $('#skill-1').attr('class', 'gold')
                    if(parseInt($('#skill-1-input-level').val()) > 6) {
                        skillLevel = parseInt($('#skill-1-input-level').val())
                        $('#skill-1').attr('class', 'diamond')
                    }
                    if(parseInt($('#skill-2-input-level').val()) >= 6 && parseInt($('#skill-3-input-level').val()) >= 6) {
                        skillLevel = 7
                        $('#skill-1').attr('class', 'diamond')
                    }
                }
                $('#skill-1').html(newSkill + ' Lv. ' + skillLevel)
            })
        } else if(skillToChange == 'skill2') {
            for(let x = 0; x < allSkillsP.length; x++) {
                if(allSkillsP[x] == $('#skill-1').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(x, 1)
                }
            }

            for(let y = 0; y < allSkillsP.length; y++) {
                if(allSkillsP[y] == $('#skill-2').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(y, 1)
                }
            }

            for(let z = 0; z < allSkillsP.length; z++) {
                if(allSkillsP[z] == $('#skill-3').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(z, 1)
                }
            }
            
            var newSkill = allSkillsP[getRandomInt(allSkillsP.length)]

            for(let a = 0; a < allSkillsP.length; a++) {
                if(allSkillsP[a] == newSkill) {
                    allSkillsP.splice(a, 1)
                }
            }
            
            $('#skill-2').html('')
            $('#skill-2').attr('class', 'white')

            var skillLevel = parseInt($('#skill-2-input-level').val())

            sleep(500).then(() => {
                if(bronzeSkillsP.includes(newSkill)) {
                    $('#skill-2').attr('class', 'bronze')
                    if(parseInt($('#skill-2-input-level').val()) > 6) {
                        skillLevel = 6
                    }
                } else if(silverSkillsP.includes(newSkill)) {
                    $('#skill-2').attr('class', 'silver')
                    if(parseInt($('#skill-2-input-level').val()) > 6) {
                        skillLevel = 6
                    }
                } else if(goldSkillsP.includes(newSkill)) {
                    $('#skill-2').attr('class', 'gold')
                    if(parseInt($('#skill-2-input-level').val()) > 6) {
                        skillLevel = parseInt($('#skill-2-input-level').val())
                        $('#skill-2').attr('class', 'diamond')
                    }
                    if(parseInt($('#skill-1-input-level').val()) >= 6 && parseInt($('#skill-3-input-level').val()) >= 6) {
                        skillLevel = 7
                        $('#skill-2').attr('class', 'diamond')
                    }
                }
                $('#skill-2').html(newSkill + ' Lv. ' + skillLevel)
            })
        } else if(skillToChange == 'skill3') {
            for(let x = 0; x < allSkillsP.length; x++) {
                if(allSkillsP[x] == $('#skill-1').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(x, 1)
                }
            }

            for(let y = 0; y < allSkillsP.length; y++) {
                if(allSkillsP[y] == $('#skill-2').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(y, 1)
                }
            }

            for(let z = 0; z < allSkillsP.length; z++) {
                if(allSkillsP[z] == $('#skill-3').text().split(' Lv. ')[0]) {
                    allSkillsP.splice(z, 1)
                }
            }
            
            var newSkill = allSkillsP[getRandomInt(allSkillsP.length)]

            for(let a = 0; a < allSkillsP.length; a++) {
                if(allSkillsP[a] == newSkill) {
                    allSkillsP.splice(a, 1)
                }
            }
            
            $('#skill-3').html('')
            $('#skill-3').attr('class', 'white')

            var skillLevel = parseInt($('#skill-3-input-level').val())

            sleep(500).then(() => {
                if(bronzeSkillsP.includes(newSkill)) {
                    $('#skill-3').attr('class', 'bronze')
                    if(parseInt($('#skill-3-input-level').val()) > 6) {
                        skillLevel = 6
                    }
                } else if(silverSkillsP.includes(newSkill)) {
                    $('#skill-3').attr('class', 'silver')
                    if(parseInt($('#skill-3-input-level').val()) > 6) {
                        skillLevel = 6
                    }
                } else if(goldSkillsP.includes(newSkill)) {
                    $('#skill-3').attr('class', 'gold')
                    if(parseInt($('#skill-3-input-level').val()) > 6) {
                        skillLevel = parseInt($('#skill-3-input-level').val())
                        $('#skill-3').attr('class', 'diamond')
                    }
                    if(parseInt($('#skill-1-input-level').val()) >= 6 && parseInt($('#skill-2-input-level').val()) >= 6) {
                        skillLevel = 7
                        $('#skill-3').attr('class', 'diamond')
                    }
                }
                $('#skill-3').html(newSkill + ' Lv. ' + skillLevel)
            })
        }
    }
    
    event.preventDefault()
})

